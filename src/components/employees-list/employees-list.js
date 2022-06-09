import EmployeesDetails from "../employees-details/employees-details";
import './employees-list.css'

const EmployeesList = ({data, onDelete}) => {

    const elems = data.map(item => {
        const {id, ...itemProps} = item;

        return(
            <EmployeesDetails key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}/>
        );
    })

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    );
}


export default EmployeesList;