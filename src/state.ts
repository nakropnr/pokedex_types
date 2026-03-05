import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./command.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationsURL: string;
    prevLocationsURL: string;
    pokedex: Record<string, Pokemon>;
};

export function initState(interval: number): State {
    const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
    });
    const pokeapi = new PokeAPI(interval);

    return { readline: rl, commands: getCommands(), pokeAPI:pokeapi, nextLocationsURL: "",prevLocationsURL:"",pokedex: {}}
}