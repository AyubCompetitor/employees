import EmployeesDetails from "../employees-details/employees-details";
import './employees-list.css'

const EmployeesList = ({data}) => {

    const elems = data.map(item => {
        return(
            <EmployeesDetails {...item}/>
        );
    })

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    );
}


export default EmployeesList;