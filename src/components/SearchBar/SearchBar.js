import {useState} from "react";
import PropTypes from "prop-types";
import css from "./SearchBar.module.css";
import { toast } from 'react-toastify';

const SearchBar = ({onSubmit}) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = event => {
    const { value } = event.currentTarget;
    setSearchName(value);
  }  
  
  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      toast('Enter request to search');  
      return;
    }

    onSubmit(searchName); 

    setSearchName('');
  }

  return (
    <header className={css.SearchBar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          name="searchName"
          value={searchName}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          // placeholder="Search movie"
        />
        <button type="submit" className={css.SearchFormButton}>Search</button>
      </form>
    </header>
  ) 
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;