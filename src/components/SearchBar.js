import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <form className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
