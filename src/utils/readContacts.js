import * as fs from "node:fs/promises";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";

const readContacts = async (filePath) => {
 const { encoding } = await DetectFileEncodingAndLanguage(filePath);
    const data = await fs.readFile(filePath, encoding);
    return JSON.parse(data);
};

export default readContacts;

