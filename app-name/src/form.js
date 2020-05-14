import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";


const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("Must be a valid email").required("Must include email"),
    password: yup.string().required("Enter password"),
    terms: yup.boolean().oneOf([true], "Please agree to terms")
})


export default function Form(props) {
const [formstate, setformstate] = useState({
    name: "",
    email: "",
    password: "",
    terms: false
})

const [error, seterror] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
})
const formsubmit = e =>{
    e.preventDefault();
    console.log("form submitted");
    axios
        .post('https://reqres.in/api/users', formstate)
        .then(response => props.use(response.data))
        .catch(err => console.log(err));
}
const validate =(e) => { 
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid =>{
        seterror({
            ...error,
            [e.target.name]: ""
        });
      })
      .catch(err =>{
          console.log(err.errors)
          seterror({
              ...error,
              [e.target.name]: err.errors[0]
          })
      })

}
const inputchange = e =>{
    e.persist()
    console.log("Input changed!", e.target.value, e.target.checked);
   validate(e)
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setformstate({...formstate, [e.target.name]:value});
}
    return(
             <form onSubmit={formsubmit}>
                <label htmlFor="name">Name </label>
                <div className="form-group">
                    <input 
                    type="text"
                    name="name"
                    value={formstate.name}
                    onChange={inputchange}
                    />
                     {error.name.length > 0 ? <p className = "error">{error.name}</p> : null}
                    </div>

                    <label htmlFor="email">Email </label>

                    <div className="form-group">
                    <input
                    type="text"
                    name="email"
                    value={formstate.email}
                    onChange={inputchange}
                    />
                    {error.email.length > 0 ? <p className = "error">{error.email}</p> : null}
                    </div>

                    <label htmlFor="password">Password </label>

                    <div className="form-group">

                    
                    <input
                    type="text"
                    name="password"
                    value={formstate.password}
                    onChange={inputchange}
                    />
                    </div>
                   <div className="form-goup">
                  <label htmlFor="terms">Terms & Conditions</label>
                   <input
                     type="checkbox"
                     id="terms"
                     name="terms"
                     checked={formstate.terms}
                     onChange={inputchange}
        />
                   </div>
                    <button type="submit">Submit</button>

            </form>

        
    )
}