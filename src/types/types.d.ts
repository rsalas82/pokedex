/* Types transformations */
export interface Chosen {
    chosen: AdaptedPokemon[];
    updateChosenPokemons: (pokemon: AdaptedPokemon) => void;
}

export interface SearchParams {
    limit: number;
    offset: number;
}

export interface PokemonList {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}

export interface AdaptedPokemon {
    id: number;
    name: string;
    order: number;
    types: Species[];
    image: string;
    baseExperience: number;
    moves: MovePokemonAPI[];
}

export interface Sprites {
    front_default: string;
    other?: Other;
}

export interface Type {
    slot: number;
    type: Species;
}

export interface Species {
    name: string,
    color: string
}

export interface Move {
    id: number;
    name: string;
    type: string;
    power: number;
}


/* Types returned by API */
export interface MoveAPI {
    names: TranslationAPI[];
    id: number;
    power: number;
    type: BaseItemAPI;
}

export interface BaseItemAPI {
    name: string;
    url:  string;
}

export interface PokemonAPI {
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    types: Type[];
    weight: number;
    sprites: Sprites;
    base_experience: number;
    moves: MovePokemonAPI[];
}

export interface TranslationAPI {
    language: BaseItemAPI;
    name: string;
}

export interface MovePokemonAPI {
    move: BaseItemAPI;
}