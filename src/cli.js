import arg from "arg";
import { create_app } from "./main";

function parseArgs(rawArgs) {
    const args = arg({
        '--skip': Boolean,
        '-s':'--skip',
    },{
        argv: rawArgs.slice(2),
    });
    return {
        skip: args['--skip'] || false,
        template: args._[0],
    }
}

export async function cli(args) {
    let options = parseArgs(args);
    await create_app(options);
}