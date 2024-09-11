import { Skill } from "./Skill";

export type ProjectDetails = {
  name: string;
  description: string;
  skills: Skill[];
  link: string;
}