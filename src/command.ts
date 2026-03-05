import { command_catch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { command_inspect } from "./command_inspect.js";
import { commandMap } from "./command_map.js";
import { command_mapb } from "./command_mapb.js";
import { command_pokedex } from "./command_pokedex.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Display a help message",
            callback: commandHelp
        },
        map: {
            name: "map",
            description: "Display location area",
            callback: commandMap
        },
        mapb: {
            name: "mapb",
            description: "Display previous location area",
            callback: command_mapb
        },
        explore: {
            name: "explore",
            description: "Explore the location area",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Catch the pokemon and keep it in pokedex",
            callback: command_catch
        },
        inspect: {
            name: "inspect",
            description: "Inspect the pokemon in your pokedex",
            callback: command_inspect
        },
        pokedex: {
            name: "pokedex",
            description: "Check your pokedex",
            callback: command_pokedex
        }
    };
}