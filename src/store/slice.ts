import { createSlice } from '@reduxjs/toolkit';
import { initAttributes, initSkills } from '../utils/characters';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    allIds: [],
    byId: {},
    showClassInfo: {}
  },
  reducers: {
    charactersLoaded: (state, action) => {
      const characters  = action.payload;
      characters.forEach((character) => {
        state.allIds.push(character.id);
        state.byId[character.id] = character;
      });
    },
    createCharacter: (state) => {
      const id = state.allIds.length;
      state.allIds.push(id);
      state.byId[id] = {
        id,
        attributes: initAttributes(),
        skills: initSkills(),
      };

    },
    addCharacter: (state, action) => {
      const { id, name, role } = action.payload;
      state.allIds.push(id);
      state.byId[id] = { id, name, role };
    },
    updateCharacterProperty: (state, action) => {
      const { id, property, value } = action.payload;
      if (state.byId[id]) {
        state.byId[id][property] = value;
      }
    },
    incrementAttributeValue: (state, action) => {
      const { id, name } = action.payload;
      const total = Object.values(state.byId[id]?.attributes ?? {}).reduce((a: number, b: number) => a + b, 0) as number;
      if (state.byId[id]) {
        if (total < 70) {
          state.byId[id].attributes[name] += 1;
        } else {
          alert("Character is too powerful!");
        }

      }
    },
    decrementAttributeValue: (state, action) => {
      const { id, name } = action.payload;
      if (state.byId[id]) {
        state.byId[id].attributes[name] -= 1;
      }
    },
    incrementSkillValue: (state, action) => {
      const { id, name } = action.payload;
      const maxSkillsPoints = 10 + (4 * Math.floor((state.byId[id].attributes['Intelligence'] - 10) / 2))

      const totalSkillPoints = Object.values(state.byId[id].skills).reduce((a: number, b: number) => a + b, 0) as number;
      if (state.byId[id]) {
        if(totalSkillPoints < maxSkillsPoints) {
          state.byId[id].skills[name] += 1;
        } else {
          alert("Character has too many skills!");
        }
      }
    },
    decrementSkillValue: (state, action) => {
      const { id, name } = action.payload;
      if (state.byId[id]) {
        const value = state.byId[id].skills[name] - 1
        state.byId[id].skills[name] = value < 0 ? 0 : value;
      }
    },
    showInfo: (state, action) => {
      const { id, name } = action.payload;     
      state.showClassInfo[id] = name 
    },
    hideInfo: (state, action) => {
      const { id } = action.payload;     
      state.showClassInfo[id] = null 
    },
  },
});

export const { 
  addCharacter, updateCharacterProperty, charactersLoaded, createCharacter, incrementAttributeValue, 
  decrementAttributeValue, incrementSkillValue, decrementSkillValue, showInfo, hideInfo
} = charactersSlice.actions;
export default charactersSlice.reducer;
