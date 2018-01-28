import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }
  searchChangeHandler(event) {
    console.log(event.target.value);
  }

  submitHandler(event) {
    console.log('submited');
    event.preventDefault();
  }

  render() {
    return (
      <div className="search-box-component">
        <form onSubmit={this.submitHandler}>
          <input
            className="search-box-input"
            type="text"
            placeholder="Nunca dejes de buscar"
            value={this.props.searchText}
            onChange={this.searchChangeHandler}
          />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBox;
