import React from "react";
import unsplash from "../api/Unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {

    state = { images: [] };
    constructor() {
        super();
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }


    async onSearchSubmit(searchTerm) {

        const response = await unsplash.get("/search/photos", {
            params: { query: searchTerm },
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;