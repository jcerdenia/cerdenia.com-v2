import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Work } from "../app/compositions/types";

const DIR = path.join(process.cwd(), "content/compositions");

export function getAllCompositions(): Work[] {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const key = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(DIR, file), "utf8");
    const { data } = matter(raw);
    return { key, ...data } as Work;
  });
}

export function getComposition(key: string): (Work & { content: string }) | null {
  const filePath = path.join(DIR, `${key}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { key, ...data, content } as Work & { content: string };
}
