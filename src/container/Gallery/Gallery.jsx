import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { SubHeading } from '../../components';
import { images } from '../../constants'

import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null)
  const scroll = (direction) => {
    const { current } = scrollRef

    direction === 'left'
    ? current.scrollLeft -=300
    : current.scrollLeft +=300
  }

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  return (
  <div className="flex-center gallery">
    <div className="gallery__content">
      <SubHeading title={'Instagram'}/>
      <h2 className="headtext-cormorant gallery__title">Photo Gallery</h2>
      <p className="p-opensans gallery__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <a className="btn-custom gallery__link" href="/">View More</a>
    </div>
    <div className="gallery__images">
      <div className="gallery__image-container" ref={scrollRef}>
        {
          galleryImages.map((image, idx) => (
            <div className="flex-center gallery__image" key={`galley-image-${idx+1}`}>
              <img className="gallery__img"  src={image} alt="Gallery Img"/>
              <BsInstagram className="gallery__instagram-icon"/>
            </div>
          ))
        }
      </div>
      <div className="gallery__arrows">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')}/>
        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')}/>
      </div>
    </div>
  </div>
)}

export default Gallery;
