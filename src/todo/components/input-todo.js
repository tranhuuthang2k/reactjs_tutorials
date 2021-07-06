// quy dinh gia tri chuyen vao cho props la nhu the nao
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  return(
    <input
      type={props.type}
      name={props.name}
      onChange={props.change}
      value={props.val}
    />
  )
}

InputTodo.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  val: PropTypes.string.isRequired, // isRequired: bat buoc
  change: PropTypes.func.isRequired // ham
}

export default InputTodo;