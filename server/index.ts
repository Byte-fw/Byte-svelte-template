import { ByteExport } from "byte-server";

const byte = exports["Byte"].Import() as ByteExport;
const logger = byte.utils.Logger.construct("template-main");

logger.info("Template server started!");