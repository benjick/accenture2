import {connect} from 'react-redux';
import {setName, setMessage, sendMessage} from '../actions';
import Form from '../Form';

const mapStateToProps = state => ({
  name: state.name,
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  setMessage: message => dispatch(setMessage(message)),
  sendMessage: () => dispatch(sendMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
