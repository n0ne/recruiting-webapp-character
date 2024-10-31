export type Attributes = {
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
};

export type Class = "Barbarian" | "Wizard" | "Bard";

export type Character = {
  id: string;
  attributes: Attributes;
  skills: Record<string, number>;
};

export type Skills = {
  Acrobatics: number;
  AnimalHandling: number;
  Arcana: number;
  Athletics: number;
  Deception: number;
  History: number;
  Insight: number;
  Intimidation: number;
  Investigation: number;
  Medicine: number;
  Nature: number;
  Perception: number;
  Performance: number;
  Persuasion: number;
  Religion: number;
  SleightOfHand: number;
  Stealth: number;
  Survival: number;
};