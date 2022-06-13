import './app-info.css';

const AppInfo = ({employees, increasedEmployees}) => {
   
    return (
        <div className="app-info">
            <h1 className='app-info-head'>
                Учет сотрудников компании «N»
            </h1>

             <h2>
                 Общее число сотрудников: {employees}
             </h2>

             <h2>

                 Премированные сотрудники: {increasedEmployees}
             </h2>
        </div>
    );
}

export default AppInfo;