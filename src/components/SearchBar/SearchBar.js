import {useState} from "react";
import PropTypes from "prop-types";
import css from "./SearchBar.module.css";

const SearchBar = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    const { value } = event.currentTarget;
    setQuery(value);
  }  
  
  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return alert ('Enter query to search');
    }

    onSubmit(query); 
    setQuery('');
  }

  return (
    <header className={css.SearchBar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
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