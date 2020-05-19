import React from 'react';
import AppHeader from '../app-header'
import SearchPanel from "../search-panel";
import ToDoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './app.css'


class App extends React.Component {

    maxId = 1

    state = {
        todoRecords: [
            this.createToDoRecords("Drink coffee"),
            this.createToDoRecords("Create awesome app"),
            this.createToDoRecords("Have a launch"),
        ],
        term: "",
        filter: "all" // all, active, done
    }

    createToDoRecords(label){
        return {label: label, id: this.maxId++, done: false, important: false}
    }

    getStateCopy(){
        const { todoRecords } = this.state
        return todoRecords.slice(0, todoRecords.length)
    }

    getIndexById(_todoRecords, id){
        return _todoRecords.findIndex((el) => el.id === id)
    }

    onDeleteRecord = (id) => {
        let _todoRecords = this.getStateCopy()
        const idx = this.getIndexById(_todoRecords, id)
        _todoRecords.splice(idx, 1)
        this.setState({todoRecords: _todoRecords})
    }

    onToggleImportant = (id) => {
        let _todoRecords = this.getStateCopy()
        const idx = this.getIndexById(_todoRecords, id)
        const important = _todoRecords[idx].important
        _todoRecords[idx].important = !important
        this.setState({todoRecords: _todoRecords})
    }

    onToggleDone = (id) => {
        let _todoRecords = this.getStateCopy()
        const idx = this.getIndexById(_todoRecords, id)
        const done = _todoRecords[idx].done
        _todoRecords[idx].done = !done
        this.setState({todoRecords: _todoRecords})
    }

    onRecordAdd = (label) => {
        let _todoRecords = this.getStateCopy()
        _todoRecords.push(this.createToDoRecords(label))
        this.setState({todoRecords: _todoRecords})
    }

    onSearchState = (term) =>{
        this.setState({term: term})
    }

    onFilterChange = (filter) => {
        this.setState({filter: filter})
    }

    search(items, term){
        if (term.length === 0){
            return this.state.todoRecords
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    filter(items, filter){
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items;
        }
    }

    render() {
        const { todoRecords, term } = this.state

        const visibleItems = this.filter(this.search(todoRecords, term), this.state.filter)

        const todoDoneRecordCount = todoRecords.filter((el) => el.done).length
        const todoRecordCount = todoRecords.length

        return (
            <div className="todo-app">
                <AppHeader toDo={todoRecordCount - todoDoneRecordCount} done={todoDoneRecordCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchState={this.onSearchState} />
                    <ItemStatusFilter filter={this.state.filter} onFilterChange={this.onFilterChange}/>
                </div>
                <ToDoList
                    todoRecords={visibleItems}
                    onDeleteRecord={this.onDeleteRecord}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                < ItemAddForm onRecordAdd={this.onRecordAdd}/>
            </div>
            );
    }
}


export default App;