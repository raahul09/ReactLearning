import React, { useState } from 'react'

export const Form08003 = () => {
    const [inputText , setState] = useState();
    const [fullName,setFullName] = useState();
    let textChanger = (value) => {
        console.log(inputText);
        setState(value.target.value);
    }
    let setText = (val) => {
        setFullName(inputText);
    }
  return (
    <div className='d-flex align-items-center justify-content-center' style={{height:"100vh"}}>
         <div className="card text-center w-25 ">
           <div className="card-body">
             <h4 className="card-title">Hello {fullName}</h4>
             <div className="m-3">
             <input type="text" onChange={textChanger} className="form-control " name="Name" placeholder="Please Enter Your Name"/>
             <button type="button" onClick={setText} className='btn btn-primary mt-3'>Click for Change 😻</button>
            </div>
           </div>
         </div>
        <div className="mb-3 d-flex ">
          {/* <label for="name" className="form-label"></label> */}
          
        </div>
    </div>
  )
}
