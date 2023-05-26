import { readFile, writeFile } from "fs/promises";

export const addObjectToJsonFile = async (
  filePath: string,
  newObject: { [key: string]: any }
) => {
  const jsonData = await readFile(filePath, "utf8");
  const existingData = JSON.parse(jsonData || "{}");
  const [key, value] = Object.entries(newObject)[0];
  existingData[key] = value;
  const updatedJsonData = JSON.stringify(existingData, null, 2);
  writeFile(filePath, updatedJsonData);
};
