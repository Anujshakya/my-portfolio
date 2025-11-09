import {KeySkillModel} from './key-skill.model';

export interface ProjectModel {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  repoLink: string;
  webLink: string;
  keySkills: KeySkillModel[];
  status: string;
}
