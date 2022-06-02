import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

function App() {

    const data = [
        {name: 'John. C', salary: 800, increase: true},
        {name: 'Alex. M', salary: 2000, increase: false},
        {name: 'Frank. L', salary: 3100, increase: false},
    ];

   return (
       <div className="app">
           <AppInfo />

           <div className="search-panel">
                <SearchPanel  />
                <AppFilter />
           </div>

           <EmployeesList data={data}/>
           <EmployeesAddForm />
       </div>
   );
}

export default App;