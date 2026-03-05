import { State } from "./state.js";

export async function command_mapb(state: State) {
    if (state.prevLocationsURL === "") {
        throw new Error("you're on the first page");
    }
    const prevLocations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = prevLocations.next;
    state.prevLocationsURL = prevLocations.previous;
    for (let location of prevLocations.results) {
        console.log(location.name);
    }
}