import { ATTRIBUTE_LIST, SKILL_LIST } from "../consts";
import { Attributes, Skills } from "../types";

export const initAttributes = (): Attributes => {
  return ATTRIBUTE_LIST.reduce((accumulator, attribute) => {
    accumulator[attribute] = 10;
    return accumulator;
  }, {} as Attributes);
};

export const initSkills = (): Skills => {
  return SKILL_LIST.reduce((accumulator, skill) => {
    accumulator[skill.name] = 0;
    return accumulator;
  }, {} as Skills);
};
