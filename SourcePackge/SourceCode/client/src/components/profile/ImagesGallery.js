import React, { Component } from 'react'

export default class ImagesGallery extends Component {
  render() {
    return (
        <section className="gallery">
            <img className="img-gallery" src="https://source.unsplash.com/user/mkmueller/likes/600x400" />
            <img className="img-gallery" src="https://source.unsplash.com/user/mkmueller/likes/603x402" />
            <img className="img-gallery" src="https://source.unsplash.com/user/mkmueller/likes/606x404" />
            <img className="img-gallery" src="https://source.unsplash.com/user/mkmueller/likes/609x406" />
            <div className="form-group">
                <label className="label">
                    <i className="material-icons">attach_file</i>
                    <span className="title">Add File</span>
                    <input type="file" />
                </label>
            </div>
      </section>
      
    )
  }
}
