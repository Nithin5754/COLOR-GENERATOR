import SingleColor from './SingleColor'
import React, { useState } from 'react'
import Values from 'values.js'


const Colour = () => {
  const [isColor,setColor]=useState('')
  const [isError,setError]=useState(false)
  const [isList,setList]=useState(new Values('#f15025').all(20))


  const handlesubmit=(e)=>{
 try {
  setError(false)
  e.preventDefault()
  console.log(isColor);
  const color = new Values(isColor).all(20)
   setList(color)
   console.log(isList);
 } catch (error) {
  setError(true)
  console.log(error);

 }


  }
  return (
    <main>
      <section className="container" onSubmit={handlesubmit}>
          <form action="">
             <input type="text" name='colours' className={`${isError?'error':null}`} value={isColor} onChange={(e)=>setColor(e.target.value)}/>
             <button className='btn'type='submit'> generate</button>
          </form>
      </section>
      <section className="colors">
      {
          isList.map((color,index)=>{
      
            return (
              <SingleColor key={index} {...color}  index={index}/>
            )
          })
        }
      </section>
  
      
    </main>
  )
}
export default Colour