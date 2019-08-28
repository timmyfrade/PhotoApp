import React, { Component } from 'react';
import axios from 'axios';

import PhotoAppHeader from '../../components/photoAppHeader';
import PhotoListItem from '../../components/photoListItem';
import Searchbar from '../../components/searchBar';

import '../app/index.css';

export default class PhotoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: 'cyanotype',
            photoList: [],
            numberOfPhotos: 8,
            loadingState: false,
            loadingMessage: '',
            hasMore: true,
            apiKey: "0a689ad2494c98eceda96ad90bc7990a"
        }
    }

    componentDidMount() {
        this.getPhotoList();
        this.onInfiniteScroll();
    }

    /* get data from Flickr public feed */
    getPhotoList = async () => {
        const flickr = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.apiKey}&tags=${this.state.searchTerm}&privacy_filter=1&safe_search=1&extras=url_m%2Cowner_name%2Cdescription%2Ctags%2Curl_l&format=json&nojsoncallback=1`;

        await axios.get(flickr)
            .then((response) => {
                const photoList = response.data.photos;
                this.setState({
                    photoList: photoList.photo,
                    hasMore: photoList.length
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    /* code for infinite scroll */
    onInfiniteScroll = () => {
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight - 20) {
                this.loadMoreItems();
            }
        });
    }

    /* code for infinite scroll */
    loadMoreItems = () => {
        if (this.state.loadingState || (this.state.numberOfPhotos > this.state.hasMore)) {
            return;
        }

        this.setState({
            loadingState: true,
            loadingMessage: "Loading photos..."
        });
        setTimeout(() => {
            this.setState(prevState => ({
                numberOfPhotos: prevState.numberOfPhotos + 8,
                loadingState: false,
                loadingMessage: "No more photos to show."
            }));
        }, 500);
    };

    /* handler for search bar */
    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    /* debouncing search request */
    setDelay = (function () {
        let timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    render() {
        return (
            <div className='appContainer' ref="iScroll">
                <PhotoAppHeader>
                    <Searchbar
                        placeholder='Search for tags... eg: wetplate'
                        onKeyUp={() => this.setDelay(function () {
                            this.getPhotoList();
                        }.bind(this), 1000)}
                        onChange={(e) => this.handleChange(e)}
                    />
                </PhotoAppHeader>

                <div className="gridContainer">
                    {this.state.photoList.slice(0, this.state.numberOfPhotos).map(photo => {
                        return (
                            <PhotoListItem
                                key={photo.id}
                                url={photo.url_m}
                                photoLink={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`}
                                title={photo.title}
                                author={photo.ownername}
                                authorLink={`https://www.flickr.com/people/${photo.owner}`}
                                description={photo.description._content}
                                tags={photo.tags}
                            />
                        );
                    })}
                </div>
                <p className="loading">{this.state.loadingMessage}</p>
            </div>
        );
    }
}
