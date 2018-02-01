import React, { Component } from 'react';

class Breadcrums extends Component {
  renderDecorator() {
    return <span className="breadcrum-category-separator">></span>;
  }

  renderCategories() {
    const length = this.props.categories.length;
    return this.props.categories.map((category, i) => {
      const isLast = length === i + 1;
      const style = !isLast ? 'breadcrum-category' : 'breadcrum-category last';

      return (
        <span key={category} className={style}>
          {category} {!isLast && this.renderDecorator()}
        </span>
      );
    });
  }

  render() {
    return <div className="breadcrum-component">{this.renderCategories()}</div>;
  }
}

export default Breadcrums;
