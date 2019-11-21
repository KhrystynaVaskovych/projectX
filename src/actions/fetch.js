import { fetchNotesPending, fetchNotesSuccess, fetchNotesError } from './CrudAPIAtions';
import axios from 'axios';
const API = 'http://localhost:4000';

const fetchNotes = () => (
  async (dispatch) => {
    try {
      fetchNotesPending();
      const response = await axios.get(`${API}/notes`);
      if (response.status === 404) {
        throw Error(response.statusText);
      }
      dispatch(fetchNotesSuccess(response.data));
      console.log(response.data);
    } catch (error) {
      dispatch(fetchNotesError(error));
    }
  });

export default fetchNotes;


// axios.get(`https://jsonplaceholder.typicode.com/users`)
// .then(res => {
//   const persons = res.data;
//   this.setState({ persons });
// })