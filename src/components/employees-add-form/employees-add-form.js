import { Component } from 'react'
import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputId = (e) => {
        this.setState({
            name: e.target.value
        })
    }  

    onInputSalary = (e) => {
        this.setState(state => ({
            salary: e.target.value
        }))
    }

    addEmployees = () = {
        this.setState()
    }

    render() {
        const defaultPlaceholderId = 'ИМЯ ФАМИЛИЯ';
        const defaultPlaceholderSalary = 'З/П в $';

        const {name, salary} = this.state;

        return (

            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder={defaultPlaceholderId} onChange={this.onInputId} value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder={defaultPlaceholderSalary} onChange={this.onInputSalary} value={salary}/>
    
                    <button type="submit"
                        className="btn btn-outline-light" onSubmit={}>Добавить</button>
                </form>
            </div>
        );
    }
}


export default EmployeesAddForm;