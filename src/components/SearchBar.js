import React from "react";

class SearchBar extends React.Component {

    state = { searchTerm: "" };

    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Images</label>
                        <input type="text"
                            value={this.state.searchTerm}
                            onChange={(event) => { this.setState({ searchTerm: event.target.value }); }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;