import PropTypes from 'prop-types';

const styleFinish = {
  color: 'red',
  textDecoration: 'line-through',
  fontWeight: 'bold'
}

const ListTodo = (props) => {
  return (
    <ul>
      {props.list.map((item,_) => (
        <li key={item.idWork}>
          <input
            type="checkbox"
            onClick={() => props.finish(item.idWork)}
          />
          <span style={item.done ? styleFinish : null}> {item.nameWork} </span>
         
          <span
            style={{ marginLeft: '20px', color: 'red' }}
            onClick={()=>props.del(item.idWork)}
          > [X] </span>
        </li>
      ))}
    </ul>
  )
}
ListTodo.propTypes = {
  list: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired,
  finish:  PropTypes.func.isRequired,
}
export default ListTodo;