import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,alpha,weight,type,index}) => {
  let [alert,setAlert]=useState(false)
  let color=`rgb(${rgb.join(',')})`
 let hexColor=rgbToHex(...rgb)

 useEffect(()=>{
let hide=setInterval(() => {
  setAlert(false)
}, 3000);
return ()=>clearTimeout(hide)

 },[alert])
  return (
 

<article className={`color ${index>10&&'color-light'}`} style={{ backgroundColor: color }}
onClick={()=>{
setAlert(true)
navigator.clipboard.writeText(hexColor)
}}

>
  <h4  className="precent-value">{weight}%</h4>
<p className={`color ${index>10&&'color-light'}`}>{hexColor}</p>
{alert&&<p className="alert" style={{color:`${index>10&&'white'}`}}>clipBoard copied</p>}
</article>

 
  )
}

export default SingleColor
