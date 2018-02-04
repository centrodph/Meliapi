import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }
  searchChangeHandler(event) {
    this.props.searchTermChange(event.target.value);
  }

  submitHandler(event) {
    this.props.searchTermSubmitted(this.props.searchTerm);
    this.props.history.push(`/items?search=${this.props.searchTerm}`);
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
            value={this.props.searchTerm}
            onChange={this.searchChangeHandler}
          />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ search }, ownProps) => {
  const { searchTerm, submited, error, loading } = search;
  return { searchTerm };
};
export default connect(mapStateToProps, actions)(withRouter(SearchBox));
