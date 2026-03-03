import {KeySkillModel} from './key-skill.model';

export interface AboutMeModel {
  first_name: string;
  last_name: string;
  quote: string;
  image_url: string;
  description: string;
  skills: KeySkillModel[];
}
