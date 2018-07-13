import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                        text:'clean room'
                },{
                    id: 2,
                        text:'make laundry'
                },{
                    id: 3,
                        text:'do some exercises'
                }
            ]
        };
    }
    
    // ADD TO DO OBJECTS
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    
    // REMOVE TODO OBJECTS
    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
    }
    
    //RENDER
    render() {
        return (
            <div className={style.TodoApp}>
                <Title data={this.state.data}/>
                <TodoList data={this.state.data} remove={ (id) => this.removeTodo(id)}/>
            </div>
        );
    }
}

export default App;