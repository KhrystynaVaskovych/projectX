import { FETCH_NOTES_PENDING, FETCH_NOTES_SUCCESS, FETCH_NOTES_ERROR } from '../constants';

const initialState = {
  pending: false,
  notes: [],
  error: null
};

export const notesReducer = (state = initialState, { type, notes, error }) => {
  switch (type) {
    case FETCH_NOTES_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        pending: false,
        notes
      };
    case FETCH_NOTES_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    default:
      return state;
  }
};

export const getNotes = (state) => state.notes;
export const getNotesPending = (state) => state.pending;
export const getNotesError = (state) => state.error;
