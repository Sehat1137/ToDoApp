import React from "react";
import './todo-list-item.css'

class TodoListItem extends React.Component{
    render() {
        const { label, done, important } = this.props

        const listItemClass = `todo-list-item ${done ? "done": ""} ${important ? "important" : ""}`

        return (
            <span className={listItemClass}>
              <span
              className="todo-list-item-label"
              onClick={ this.props.onToggleDone }
              >
                {label}
              </span>

              <button
                  type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={ this.props.onToggleImportant }
              >
                <i className="fa fa-exclamation" />
               </button>

              <button
                  type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={ this.props.onDeleteRecord }
              >
                <i className="fa fa-trash-o" aria-hidden="true" />
              </button>
            </span>
        )
    }
}

export default TodoListItem;