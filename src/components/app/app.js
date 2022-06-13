import { render } from '@testing-library/react';
import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John. C', salary: 800, increase: true, rise: false, id: 1},
                {name: 'Alex. M', salary: 2000, increase: false, rise: false, id: 2},
                {name: 'Frank. L', salary: 3100, increase: false, rise: false, id: 3},
            ]
        }
        this.maxId = 4;
    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            const dataEdited = {
                data: data.filter(item => item.id !== id)
            }
            
            return dataEdited;
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.state.data.length + 1
        }
        this.setState(({data}) => {
            const newData = [...data, newItem];

            return {
                data: newData
            }
        })
    }  

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                  return {...item, [prop]: !item[prop]}  
                }
                return item;
            })
        }))
    }

     
    render() {
        const {data} = this.state;

        const employeesCount = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo employees = {employeesCount} increasedEmployees = {increasedEmployees}/>
     
                <div className="search-panel">
                     <SearchPanel  />
                     <AppFilter />
                </div>
     
                <EmployeesList data = {data} onDelete = {this.deleteItem} onToggleProp = {this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}


export default App;