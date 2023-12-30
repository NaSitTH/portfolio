import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const projectsDirectory = join(process.cwd(), "_projects");

export function getAllProjects(fields: string[] = []) {
  const slugs = fs.readdirSync(projectsDirectory);
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort by date in descending order
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return projects;
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}
