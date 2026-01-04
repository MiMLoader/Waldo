export type Elements =
  | "Electric"
  | "Earth"
  | "Water"
  | "Poison"
  | "Ice"
  | "Fire"
  | "Dark"
  | "Psychic";

export interface CardJson {
  custom?: boolean;
  name: string;
  type?: "Skill" | "Attack";
  stat?: "speed" | "power" | "armor";
  multiplier?: number;
  element?: "None" | Elements;
  target?: // SPECIAL CASES: +: and? ,: or?
    | "opponent"
    | "self"
    | "player"
    | "opponents"
    | "ally"
    | "allies"
    | "anyone"
    | "randomAllies"
    | "all"
    | "randomOpponents"
    | "opponent+self"
    | "randomOpponents,self"
    | "singleRandomOpponent,self";
  playerCost?: number;
  rarity?: number;
  damage?:
    | "Armor"
    | "Normal"
    | Elements
    | `${"Armor" | "Normal" | Elements}*${number}`;
  condition?: {
    type: // SPECIAL CASES: ,: or?
      | "Rage"
      | "Regen"
      | "Poison"
      | "Tangle"
      | "Freeze"
      | "Sharp"
      | "Charge"
      | "Burn"
      | "Ethereal"
      | "Calm"
      | "Intangible";
  };
  upgradeable?: boolean;
  AI?: boolean;
  weight?: number;
  exhaust?: boolean;
  retain?: boolean;
  armor?: number;
  gfx?:
    | "hit"
    | "bite"
    | "normal"
    | "lightningBolt"
    | "none"
    | "shine"
    | "earth"
    | "erupt"
    | "redBurst"
    | "rage"
    | "zigzag"
    | "thunder"
    | "claws"
    | "yellowStrike"
    | "redMulti"
    | "yellowCircle"
    | "blueBall"
    | "water"
    | "blueBolt"
    | "hpRain"
    | "cure"
    | "poison"
    | "tangle"
    | "greenBall"
    | "poisonClaw"
    | "greenTornado"
    | "greenSplash"
    | "greenSplat"
    | "ice"
    | "blueCharge"
    | "iceColumn"
    | "freeze"
    | "shield"
    | "iceCast"
    | "sharp"
    | "electric"
    | "lightningStrike"
    | "sparkCircle"
    | "lightningBlast"
    | "blueCircle"
    | "thunderDome"
    | "fire"
    | "burnBall2"
    | "burn"
    | "burnBall1"
    | "burnBall3"
    | "fireBreath"
    | "redVertical2"
    | "mindBlast"
    | "burnPoint2"
    | "darkSplat"
    | "mindSpike"
    | "ethereal"
    | "darkCore"
    | "star"
    | "randomize"
    | "smokeSlash"
    | "dark"
    | "portal"
    | "darkSmoke"
    | "summon"
    | "darkMirror"
    | "pinkMulti"
    | "intangible"
    | "pinkColumn"
    | "twinRose"
    | "twinPink"
    | "shadowHeart"
    | "pinkVertical2"
    | "pinkVertical"
    | "pinkVortex";
  draw?: number | `${string}:${number}`;
  energyGain?: number;
  EN?: `${string}{desc}${string}`;
  FR?: `${string}{desc}${string}`;
  DE?: `${string}{desc}${string}`;
  ES?: `${string}{desc}${string}`;
  BR?: `${string}{desc}${string}`;
  CN?: `${string}{desc}${string}`;
  JP?: `${string}{desc}${string}`;
  RU?: `${string}{desc}${string}`;
}

export interface Patch {
  type: "card";
  path: string;
  structure: CardJson;
  table: Map<string, number>;
}
