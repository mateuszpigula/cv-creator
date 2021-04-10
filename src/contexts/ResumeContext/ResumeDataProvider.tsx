import React, { Context, ReactElement, useEffect, useReducer } from 'react';
import DEFAULT_STATE from 'json/example.json';
import * as actions from 'actions';
import { ResumeState, ResumeProps, Actions } from './types';

export const ResumeContext = (React.createContext({}) as unknown) as Context<{
  state: ResumeState;
  dispatch: (action: Actions) => void;
}>;

const init = (initialState: ResumeState) => initialState;
const localStorageData = localStorage.getItem('data');
const initialState: ResumeState = localStorageData ? JSON.parse(localStorageData) : DEFAULT_STATE;

const updateLocalStorage = (state: ResumeState) => {
  localStorage.setItem('data', JSON.stringify(state));
  return state;
};

const resumeReducer = (state: ResumeState, action: Actions) => {
  switch (action.type) {
    case actions.UPDATE_DATA: {
      const { target, value } = action.payload;

      return updateLocalStorage({ ...state, [target.section]: value });
    }
    case actions.EDIT_TITLE: {
      const { target, value } = action.payload;

      return updateLocalStorage({
        ...state,
        headings: { ...state.headings, [target.section]: value },
      });
    }
    case actions.EDIT_SKILL: {
      const { target, value } = action.payload;
      const { index, skillIndex } = target;
      const newSection = [...state.skills];
      newSection[index].list[skillIndex] = value;

      return updateLocalStorage({
        ...state,
        skills: newSection,
      });
    }
    case actions.EDIT_SECTION: {
      const { target, value } = action.payload;
      const { section, property, index } = target;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const newSection = [...state[section]];
      newSection[index][property] = value;

      return updateLocalStorage({
        ...state,
        [target.section]: newSection,
      });
    }
    case actions.IMPORT_JSON: {
      return updateLocalStorage({ ...action.payload });
    }
    case actions.ADD_SECTION: {
      return updateLocalStorage({
        ...state,
        [action.payload]: [...state[action.payload], DEFAULT_STATE[action.payload][0]],
      });
    }
    default:
      throw new Error();
  }
};
export const ResumeDataProvider = ({ children }: ResumeProps): ReactElement => {
  const [state, dispatch] = useReducer(resumeReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
  }, [state]);

  return <ResumeContext.Provider value={{ state, dispatch }}>{children}</ResumeContext.Provider>;
};
