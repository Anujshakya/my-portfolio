export interface ExperienceModel {
  id: number;
  companyName: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  keySkills: ExperienceKeySkillModel[];
  summary: string[];
  url: string;
  logoUrl: string;
}

export interface ExperienceKeySkillModel {
  name: string;
  url: string;
}
