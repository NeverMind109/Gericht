import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    playVideo
      ? vidRef.current.pause()
      : vidRef.current.play()
  }

  return (
  <div className="intro">
    <video className="intro__video" ref={vidRef} src={meal} type="video/mp4" loop controls={false} muted></video>
    <div className="flex-center intro__overlay">
      <div className="flex-center intro__circle" onClick={handleVideo}>
        { playVideo 
          ? <BsPauseFill color="fff" fontSize={30} />
          : <BsFillPlayFill color="fff" fontSize={30} />
        }
      </div>
    </div>
  </div>
  )
}


export default Intro;
