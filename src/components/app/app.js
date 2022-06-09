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
                {name: 'John. C', salary: 800, increase: true, id: 1},
                {name: 'Alex. M', salary: 2000, increase: false, id: 2},
                {name: 'Frank. L', salary: 3100, increase: false, id: 3},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const dataEdited = {
                data: data.filter(item => item.id !== id)
            }
            
            return dataEdited;
        })
    }

    onAdd = () = {
        
    }

    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo />
     
                <div className="search-panel">
                     <SearchPanel  />
                     <AppFilter />
                </div>
     
                <EmployeesList data = {data} onDelete = {this.deleteItem} onAdd={this.addEmployees}/>
                <EmployeesAddForm />
            </div>
        );
    }
}


export default App;