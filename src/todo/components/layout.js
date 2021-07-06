import PropTypes from 'prop-types';
import '../styles/layout.css';

const LayoutTodo = (props) => {
  return(
    <div className="container">
      {props.children}
    </div>
  )
}

LayoutTodo.propTypes = {
  children: PropTypes.node, // cac thanh phan component
  // PropTypes.element: // ben trong chi co 1 thanh phan component
}
export default LayoutTodo;