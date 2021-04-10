import { ReactNode } from 'react';
import {
  ADD_SECTION,
  EDIT_SECTION,
  EDIT_SKILL,
  EDIT_TITLE,
  IMPORT_JSON,
  UPDATE_DATA,
} from 'actions';

export interface Skill {
  type: string;
  list: string[];
}

export interface Experience {
  name: string;
  time: string;
  position: string;
  summary: string;
}

export interface Education {
  name: string;
  time: string;
  course: string;
  summary: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface Headings {
  bio: string;
  experience: string;
  education: string;
  languages: string;
}

export interface ResumeState {
  name: string;
  avatar: string;
  position: string;
  address: string;
  phone: string;
  email: string;
  bio: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  languages: Language[];
  headings: Headings;
  skillsSpace: string;
}

export type ResumeProps = {
  children: ReactNode;
};

interface Action {
  type: string;
}

export interface UpdateDataAction extends Action {
  type: typeof UPDATE_DATA;
  payload: {
    target: { section: string };
    value: string;
  };
}

export interface EditTitleAction extends Action {
  type: typeof EDIT_TITLE;
  payload: {
    target: { section: string };
    value: string;
  };
}

export interface EditSkillAction extends Action {
  type: typeof EDIT_SKILL;
  payload: {
    target: { index: number; skillIndex: number };
    value: string;
  };
}

export interface EditSectionAction extends Action {
  type: typeof EDIT_SECTION;
  payload: {
    target: {
      section: string;
      property: string;
      index: number;
    };
    value: string;
  };
}

export interface ImportJsonAction extends Action {
  type: typeof IMPORT_JSON;
  payload: ResumeState;
}

export interface AddSectionAction extends Action {
  type: typeof ADD_SECTION;
  payload: Sections;
}

export type Actions =
  | UpdateDataAction
  | EditTitleAction
  | EditSkillAction
  | EditSectionAction
  | ImportJsonAction
  | AddSectionAction;

export type Target = {
  section: string;
  property?: string;
  index?: number;
  skillIndex?: number;
};

export type Sections = 'experience' | 'education' | 'languages';
