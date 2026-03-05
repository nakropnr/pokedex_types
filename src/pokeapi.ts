import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;
    constructor(interval: number) {
        this.cache = new Cache(interval)
    }

    closeCache() {
        this.cache.stopReapLoop();
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        try {
            const url = pageURL ||`${PokeAPI.baseURL}/location-area`; 

            const cachedData = this.cache.get<ShallowLocations>(url);
            if (cachedData) {
                return cachedData
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            this.cache.add(url, result);
            return result;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error ("An error occured but it does not have message.")
            }
            
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        try {
            const url = `${PokeAPI.baseURL}/location-area/${locationName}`; 
            
            const cachedData = this.cache.get<Location>(url);
            if (cachedData) {
                return cachedData
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            this.cache.add(url, result);
            return result;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error ("An error occured but it does not have message.")
            }
        }
    }

    async fetchPokemon(pokemon: string): Promise<Pokemon> {
        try {
            const url = `${PokeAPI.baseURL}/pokemon/${pokemon}`;

            const cachedData = this.cache.get<Pokemon>(url);
            if (cachedData) {
                return cachedData
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            this.cache.add(url, result);
            return result;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error ("An error occured but it does not have message.")
            }
        }
    }
}

export type ShallowLocations = {
    count: number;
    next: string;
    previous: string;
    results: {name:string, url:string}[];
};

export interface Location {
  name: string;
  url: string;
  pokemon_encounters: {
    pokemon: {
        name: string;
        url: string;
    };
  }[];
}

export interface Pokemon {
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    stats: {
        base_stat: number;
        effort:number;
        stat: {
            name: string;
            url: string;
        }
    }[]
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        }
    }[]
}


