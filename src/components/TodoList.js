import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <ul className={style.Todolist}>
                {this.props.data.map((todo) =>
                    <li key={todo.id} onClick={
                        () => this.props.remove(todo.id)
                    }>
                        {todo.text}
                    </li>
                )}
            </ul>
        )
    }
}

export default TodoList;
