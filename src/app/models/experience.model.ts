import {KeySkillModel} from './key-skill.model';

export interface ExperienceModel {
  id: number;
  companyName: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  keySkills: KeySkillModel[];
  summary: string[];
  url: string;
  logoUrl: string;
}
