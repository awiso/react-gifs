import React, { Component } from 'react';

class SearchBar extends Component {
    update = (event) => {
        this.props.searchFunction(event.target.value);
    }

    // fadeIn = () => {
        
    // }

    // fadeOut = () => {

    // }


    render() {
        return(
            <input 
                type="text" 
                className="form-control form-search" 
                onChange={this.update}
                // onFocus={this.fadeIn}
                // onFocusOut={this.fadeOut}

            />
        );
    }
}

export default SearchBar;