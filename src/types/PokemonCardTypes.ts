export type PokemonCardResponseType = {
  data: PokemonCardType[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
};

export type PokemonCardType = {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Ability[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities2;
  images: Images2;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
};

export type Ability = {
  name: string;
  text: string;
  type: string;
};

export type Attack = {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
};

export type Weakness = {
  type: string;
  value: string;
};

export type Set = {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images;
};

export type Legalities = {
  unlimited: string;
  standard: string;
  expanded: string;
};

export type Images = {
  symbol: string;
  logo: string;
};

export type Legalities2 = {
  unlimited: string;
  standard: string;
  expanded: string;
};

export type Images2 = {
  small: string;
  large: string;
};

export type Tcgplayer = {
  url: string;
  updatedAt: string;
  prices: Prices;
};

export type Prices = {
  normal: Normal;
  reverseHolofoil: ReverseHolofoil;
};

export type Normal = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
};

export type ReverseHolofoil = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
};

export type Cardmarket = {
  url: string;
  updatedAt: string;
  prices: Prices2;
};

export type Prices2 = {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: any;
  suggestedPrice: any;
  reverseHoloSell: any;
  reverseHoloLow: any;
  reverseHoloTrend: any;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: any;
  reverseHoloAvg7: any;
  reverseHoloAvg30: any;
};
