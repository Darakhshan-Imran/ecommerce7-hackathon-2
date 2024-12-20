"use client"

import React from 'react'
import {useState} from "react"




const RatingStar = ({starcount}:{starcount:number}) => {

    const [starRating, setStarRating] = useState<number>(0);
  return (
    <div>
    
    {
        new Array(starcount).fill(0).map((_, index)=>{
            return <span key={index}
            className={`text-lg cursor-pointer ${index < starRating ? 'text-yellow-500' : ""}`}  
             onClick={()=>setStarRating(index + 1)}> ★ </span>
        })
    }
    </div>       
           
  )
}

export default RatingStar
