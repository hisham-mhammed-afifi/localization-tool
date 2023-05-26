import { log } from "console";
import { Request, Response } from "express";
import { join } from "path";
import { addObjectToJsonFile } from "../utils/utils";

export const getLocalization = (req: Request, res: Response) => {
  const filename = req.params.filename;
  if (!filename) {
    res.status(400).json({ message: "No filename provided." });
  }
  const filePath = join(__dirname, "../../public", filename);
  res.status(200).sendFile(filePath);
};

export const addNewKey = async (req: Request, res: Response) => {
  try {
    const { lang, translation } = req.body;
    if (lang === "en" || lang === "ar") {
      const filePath = join(__dirname, "../../public", lang + ".json");
      addObjectToJsonFile(filePath, translation);
    } else {
      throw new Error("Language not available.");
    }
    res.status(200).json(translation);
  } catch (error) {
    res.status(400).json(error);
  }
};
