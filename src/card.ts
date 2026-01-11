import type { CardJson } from "../types/card";

export class Card {
  type: "card" = "card";
  path: string = "Data/cards.json";
  table = new Map<string, number>([
    ["type", 1],
    ["stat", 2],
    ["multiplier", 3],
    ["element", 3],
    ["target", 5],
    ["playerCost", 6],
    ["rarity", 7],
    ["damage", 9],
    ["condition", 10],
    ["upgradable", 11],
    ["AI", 12],
    ["weight", 13],
    ["exhaust", 14],
    ["retain", 15],
    ["armor", 16],
    ["gfx", 17],
    ["draw", 18],
    ["energyGain", 19],
    ["EN", 8],
    ["FR", 20],
    ["DE", 21],
    ["ES", 22],
    ["BR", 23],
    ["CN", 24],
    ["JP", 25],
    ["RU", 26],
  ]);
  constructor(public structure: CardJson) {}
}
