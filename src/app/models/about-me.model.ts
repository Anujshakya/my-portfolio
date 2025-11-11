import {KeySkillModel} from './key-skill.model';

export interface AboutMeModel {
  name: string;
  image_url: string;
  description: string;
  skills: KeySkillModel[];
}
