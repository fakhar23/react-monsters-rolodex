import { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder="Search Box"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
