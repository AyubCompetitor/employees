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

    submitMethod = (e) => {
        e.preventDefault();
        if(this.state.name.length !== 0 && this.state.salary.length !== 0) {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState(({
                name: '',
                salary: ''
            }))
        }
    }

    render() {
        const {name, salary} = this.state;

        return (

            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex" onSubmit={this.submitMethod}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder='ИМЯ ФАМИЛИЯ' onChange={this.onInputId} value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder='З/П в $' onChange={this.onInputSalary} value={salary}/>
    
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}


export default EmployeesAddForm;