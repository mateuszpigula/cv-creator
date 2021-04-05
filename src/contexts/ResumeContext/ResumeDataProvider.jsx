import React, { useEffect, useReducer } from 'react';
import * as actions from '../../actions';
import defaultState from './initialState';

export const ResumeContext = React.createContext();
const init = (initialState) => initialState;
const initialState = localStorage.getItem('data')
  ? JSON.parse(localStorage.getItem('data'))
  : defaultState;

const updateLocalStorage = (state) => {
  localStorage.setItem('data', JSON.stringify(state));
  return state;
};

const resumeReducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_DATA: {
      const { target, value } = action.payload;

      return updateLocalStorage({ ...state, [target]: value });
    }
    case actions.EDIT_TITLE: {
      const { target, value } = action.payload;

      return updateLocalStorage({
        ...state,
        headings: { ...state.headings, [target]: value },
      });
    }
    case actions.EDIT_SKILL: {
      const { target, value } = action.payload;
      const [section, property, index, skillIndex] = target.split('::');
      const newSection = [...state[section]];
      newSection[index][property][skillIndex] = value;

      return updateLocalStorage({
        ...state,
        [section]: newSection,
      });
    }
    case actions.EDIT_SECTION: {
      const { target, value } = action.payload;
      const [section, property, index] = target.split('::');
      const newSection = [...state[section]];
      newSection[index][property] = value;

      return updateLocalStorage({
        ...state,
        [section]: newSection,
      });
    }
    case actions.RESET:
      return updateLocalStorage({ ...defaultState });
    case actions.IMPORT_JSON: {
      return updateLocalStorage({ ...action.payload });
    }
    default:
      throw new Error();
  }
};
export const ResumeDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
  }, [state]);

  return <ResumeContext.Provider value={{ state, dispatch }}>{children}</ResumeContext.Provider>;
};
