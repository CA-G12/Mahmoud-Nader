import React, { Component } from "react";
import "./style.css";
class SearchBar extends Component {

  state = {
    isFindResult: false,
  }

  render() {
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
            onChange={(e) => {
              this.props.onSearch(e.target.value);
              // this.setState(isFindResult:true)
            }}
          />
          <label for="search" className="form__label">
            Search
          </label>
          <p className={this.state.isFindResult ? "error__msg" : null}>No result found</p>
        </div>
      </div>
    );
  }
}

export default SearchBar;
