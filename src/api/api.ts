import { AxiosResponse } from "axios";
import { Character } from "../types";
import HttpService from "./http";

const GITHUB_NAME = 'n0ne'
const API_URL = `https://recruiting.verylongdomaintotestwith.ca/api/${GITHUB_NAME}/character`;

export const getCharacters = async (): Promise<Character[] | null> => {
  try {
    const http = new HttpService(API_URL);

    const response: AxiosResponse<any> = await http.read('');

    if (response.data === null) {
      console.warn("Character data is null");
      return null;
    }
    if (!Array.isArray(response.data!.body)) {
      console.warn("Character data is not an array");
      return null;
    }
    return response.data.body;
  } catch (error) {
    console.error("Failed to fetch character data:", error);
    return null;
  }
};

export const saveAllCharacters = async (data): Promise<void> => {
  const http = new HttpService(API_URL);

  try {
    await http.create('', data);
  } catch (error) {
    console.error("Failed to fetch character data:", error);
    return null;
  }
};
