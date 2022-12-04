import React, {useState} from 'react';
import carouselSlidesInfo from './carouselSlides';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsArrowLeft } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"


export default function Carousel(){

    const length = carouselSlidesInfo.length;
    const [current, setCurrent] = useState(0);

    function buttonColor(e) {
        e.target.style.color="gold"
    }

    function buttonOff(e){
        e.target.style.color="black"
    }

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1);
    }

 

    // console.log(current)

    return(
        <div className='carousel'>
            <BsArrowLeft  className='cusIcon leftArrow' onMouseOut={buttonOff} onMouseOver={buttonColor} onClick={nextSlide} />
            <BsArrowRight className='cusIcon rightArrow' onMouseOut={buttonOff} onMouseOver={buttonColor} onClick={prevSlide}/>
            {carouselSlidesInfo.map((slide, index)=>{
                return(
                    <div className={index === current ? 'slideActive' : 'slide'} key={index}>
                        {index === current && (                     
                            <ul >
                                <li>
                                    <img className="carouselImg" src={slide.imgSrc}></img>
                                </li>
                                <li className='carouselDescription'>
                                    <ul>
                                        <li>
                                            <h5>{slide.title}</h5>
                                        </li>
                                        <li>
                                            {slide.description} 
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        )}
                    </div>
                )
            })}
        </div>
    )
}