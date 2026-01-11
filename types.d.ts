export type Elements =
  | "Electric"
  | "Earth"
  | "Water"
  | "Poison"
  | "Ice"
  | "Fire"
  | "Dark"
  | "Psychic";

export interface Patch {
  type: "card";
  path: string;
  structure: CardJson;
  table: Map<string, number>;
}
