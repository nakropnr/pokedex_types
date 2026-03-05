import { CLICommand,type State } from "./state.js";
import { getCommands } from "./command.js";


export function cleanInput(input: string): string[] {
    const splitString = input.toLowerCase().trim().split(" ").filter((word) => word !== "");
    return splitString
}

export async function startREPL(state: State) {

    state.readline.prompt();

    state.readline.on("line", async (line) => {
        const words = cleanInput(line);
        const commands = getCommands();
        const args = words.slice(1)
        if(words.length === 0 ) {
            state.readline.prompt();
            return
        } 
        if (!commands[words[0]]) {
            console.log("Unknown command");
        }

        try { if (commands[words[0]]) {
            await commands[words[0]].callback(state, ...args);
        } } catch (err) {
            if (err instanceof Error) {
                console.log(`An error occured: ${err.message}`);
            } else {
                console.log("An error occurred, but it does not have a message.");
            }
        }
        state.readline.prompt()
    })

}