import ImageData from "./imageData";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from "react";

const ImageSlider=()=>{
    const [current,setCurrent] = useState(0)
    let length = ImageData.length

    const prevSlide=()=>{
        setCurrent((current-1)%length)
    }
    const nextSlide=()=>{
        setCurrent((current+1)%length)
    }
    return (
        <section className="slider">
            <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide}/>
            <AiOutlineArrowRight className="right-arrow" onClick={nextSlide}/>
            {ImageData.map((data,idx)=>{
                return(
                    <div className={current===idx?'slide active':'slide'} key={idx}>
                        {idx === current && 
                        <div>
                            <img src={data.path} alt={data.title} />
                            <p>{data.title}</p>
                        </div>
                        }
                        
                    </div>
                )
            })}
        </section>
    )
}
export default ImageSlider;