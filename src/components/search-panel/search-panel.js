import './search-panel.css';

const SearchPanel = () => {
    const defaultPlaceholder = 'Найти сотрудника';

    return (
        <input 
        type="text" 
        className="form-control search-input"
        placeholder={defaultPlaceholder}
        />
    );
}

export default SearchPanel;