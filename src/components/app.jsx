import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

const GIPHY_KEY = "9KaSN5dsVTvsKti063z5K6rQIsrI5Jl0";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: "9DinKionof6ueCC4ch"
        };
    }

    search = (query) => {
        giphy({ apiKey: GIPHY_KEY, https: true })
            .search({
                q: query,
                rating: 'g',
                limit: 10
            }, (err, result) => {
                this.setState({
                    gifs: result.data
                });
            });
    }

    selectGif = (id) => {
        this.setState({
            selectedGifId: id
        });
    }

    render() {
        return(
            <div>
                <div className="left-scene">
                    <SearchBar  searchFunction={this.search}/>
                    <div className="selected-gif">
                        <Gif selectGif={this.selectedGifId} id={this.state.selectedGifId} />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifList={this.state.gifs} selectGif={this.selectGif} />
                </div>
            </div>
        );
    }
}

export default App;