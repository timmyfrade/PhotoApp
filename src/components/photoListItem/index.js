import React, { Component } from 'react';

import '../../components/photoListItem/index.css';

export default class PhotoListItem extends Component {
  render() {
    return (
      <div className='image-card'>
        <img className='image-card__image' alt='' src={this.props.url} />
        <div className="image-card__body">
          <div className="image-title">
            <a href={this.props.photoLink}>{this.props.title}</a>
            <span className='image-author'> by <a href={this.props.authorLink}>{this.props.author}</a>
            </span>
          </div>
          <div className="image-description">
            <span className='description'>Description:</span> {this.props.description}
          </div>
          <div className="image-tags">
            <span className='tags'>Tags:</span> {this.props.tags}
          </div>
        </div>
      </div>
    );
  }
}
