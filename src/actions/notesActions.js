import { REMOVE_NOTE, ADD_NOTE } from '../constants';

export const addNote = note => ({
  type: ADD_NOTE,
  note
})

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
})

