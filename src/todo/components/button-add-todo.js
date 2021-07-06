import PropTypes from 'prop-types';

const AddTodo = (props) => {
  return (
    <button
      type={props.type}
      name={props.name}
      onClick={()=> props.click()}
    >{props.children}</button>
  )
}

AddTodo.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  click: PropTypes.func.isRequired, // ham
  children: PropTypes.string.isRequired,
}
export default AddTodo;