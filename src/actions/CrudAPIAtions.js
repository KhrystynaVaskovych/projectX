import { FETCH_NOTES_PENDING, FETCH_NOTES_SUCCESS, FETCH_NOTES_ERROR } from '../constants';

export const fetchNotesPending = () => ({ type: FETCH_NOTES_PENDING });

export const fetchNotesSuccess = (notes) => ({ type: FETCH_NOTES_SUCCESS, notes });

export const fetchNotesError = (error) => ({ type: FETCH_NOTES_ERROR, error });
