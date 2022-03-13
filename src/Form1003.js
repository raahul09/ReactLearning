import React, { useState } from 'react';
const Form1003 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("")

    function onSubmitform(event) {
        event.preventDefault();
        console.log(firstName,lastName);
        setFullName(firstName+" "+lastName)
    }
    function setFName(params) {
        setFirstName(params.target.value);
    }
    function setLName(params) {
        setLastName(params.target.value);
    }
    return (
        <div>
            <div className="text-center">
                <h2>{fullName}</h2>
            </div>
            <div className="align-items-center d-flex justify-content-center" style={{height:"100vh"}}>
                <div className="card text-start " style={{width:"40%"}}>
                    <div className="card-body bg-light">
                        <h4 className="card-title text-center mb-4 ">From learning 2</h4>
                        <form className='w-100' onSubmit={onSubmitform}>
                            <div className="form-floating mb-3">
                                <input type="text" onChange={setFName} className="form-control w-100" name="firstName" id="firstName" placeholder="FirstName" />
                                <label htmlFor="floatingLabel">firstName</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" onChange={setLName} className="form-control" name="lastName" id="lastName" placeholder="lastName" />
                                <label htmlFor="floatingLabel">LastName</label>
                            </div>
                            <div className="fieldset text-center pt-4">
                            <button type="submit" className='p-2 w-25 btn text-center btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form1003