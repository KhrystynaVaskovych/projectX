import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getNotesError, getNotes, getNotesPending } from '../../reducers/CrudReducer';
import fetchNotesAction from '../../actions/fetch';
import BoardComponent from './BoardComponent';

const mapStateToProps = (state) => ({
  error: getNotesError(state),
  allNotes: getNotes(state),
  pending: getNotesPending(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchNotes: fetchNotesAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardComponent);
