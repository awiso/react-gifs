import React, { Component } from 'react';
import Gif from './gif';

const GifList = (props) => {
    return(
        <div className="gif-list">
            {props.gifList.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif}/>)}
        </div>
    );
}

export default GifList;