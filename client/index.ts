import { ByteExport } from "byte-client";

const byte = exports["Byte"].Import() as ByteExport;
const logger = byte.utils.Logger.construct("template-main");

logger.info("Template client started!");

RegisterNuiCallback("getCount", (count: number, cb: (args?: any) => void) => {
    logger.info(`Got count: ${count}`);
    cb(true);
});

RegisterCommand("setCount", (source: number, args: string[]) => {
    const count = parseInt(args[0]);
    logger.info(`Setting count to: ${count}`);
    SendNUIMessage({
        action: "setCount",
        data: count
    });
}, false);

let nuiVisible = false;
RegisterCommand("nui", (source: number, args: string[]) => {
    nuiVisible = !nuiVisible;
    logger.info(`Setting NUI visibility to: ${nuiVisible}`);
    SetNuiFocus(nuiVisible, nuiVisible);
}, false);
