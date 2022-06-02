import './employees-add-form.css'

const EmployeesAddForm = () => {

    const defaultPlaceholderId = 'ИМЯ ФАМИЛИЯ'
    const defaultPlaceholderSalary = 'З/П в $'

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder={defaultPlaceholderId} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder={defaultPlaceholderSalary} />

                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    );
}

export default EmployeesAddForm;