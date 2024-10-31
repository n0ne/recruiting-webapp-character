import { createSelector } from "reselect";
import { AppStore } from "./store";
import { CLASS_LIST } from "../consts";

const selectCharactersById = (state: AppStore) => state.byId;
export const selectAllCharacterIds = (state: AppStore) => state.allIds;

export const selectCharacterById = (id: number) =>
  createSelector(
    [selectCharactersById],
    (byId) => byId[id]
  );

export const selectCharacterAttributesById = (id: number) =>
  createSelector(
    [selectCharacterById(id)],
    (character) => character ? Object.keys(character.attributes) : []
  );

export const selectCharacterAttribute = (id: number, name: string) =>
  createSelector(
    [selectCharacterById(id)],
    (character) => character ? character.attributes[name] : undefined
  );

const isClassAttributes = (characterAttributes, classAttributes) => {
  return Object.keys(classAttributes).every(
    (attr) => characterAttributes[attr] >= classAttributes[attr]
  );
};

export const isBarbarian = (id) =>
  createSelector(
    [(state) => state.byId[id]],
    (character) => character ? isClassAttributes(character.attributes, CLASS_LIST['Barbarian']) : false
  );

export const isWizard = (id) =>
  createSelector(
    [(state) => state.byId[id]],
    (character) => character ? isClassAttributes(character.attributes, CLASS_LIST['Wizard']) : false
  );

export const isBard = (id) =>
  createSelector(
    [(state) => state.byId[id]],
    (character) => character ? isClassAttributes(character.attributes, CLASS_LIST['Bard']) : false
  );


export const selectCharacterSkill = (id: number, name: string) =>
  createSelector(
    [selectCharacterById(id)],
    (character) => character ? character.skills[name] : undefined
  );

export const showClassInfo = (id: number) => (state: AppStore) => state.showClassInfo[id];