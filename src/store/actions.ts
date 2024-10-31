import { getCharacters, saveAllCharacters } from "../api/api"
import { charactersLoaded, createCharacter } from "./slice"

export function fetchData() {
  return async (dispatch) => {
    try {
      const response = await getCharacters()
      if (response === null) {
        dispatch(createCharacter())
      } else {
        dispatch(charactersLoaded(response))
      }
    } catch (error) {
      console.group(error)
      return
    }
  }
}

export function saveCharacters() {
  return async (_, getState) => {
    const state = getState()
    const characters = Object.values(state.byId)

    try {
      await saveAllCharacters(characters)
      alert("Characters data saved successfully.");
    } catch (error) {
      console.group(error)
      return
    }
  }
}