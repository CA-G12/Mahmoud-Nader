import React, { Component } from "react";
import "./style.css";
class SearchBar extends Component {
  render() {
    
    // console.log(this.props.onSearch);
    return (
      <div className="center">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="search"
            name="search"
            id="search"
            required
            onChange={(e) => this.props.onSearch(e.target.value)}
          />
          <label for="search" className="form__label">
            Search
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
