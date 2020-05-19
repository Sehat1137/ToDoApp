import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

import './todo-list.css'

class TodoList extends React.Component{

    render() {
        const { todoRecords } = this.props

        const todoItems = todoRecords.map((item) => {
            const { id, ...recordStatuses } = item
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem
                        { ...recordStatuses }
                        onDeleteRecord={ () => this.props.onDeleteRecord(id) }
                        onToggleImportant={ () => this.props.onToggleImportant(id) }
                        onToggleDone={ () => this.props.onToggleDone(id) }
                    />
                </li>
            );
        });

        return (
            <ul className="list-group todo-list">
                { todoItems }
            </ul>
        );
    }
}


export default TodoList;