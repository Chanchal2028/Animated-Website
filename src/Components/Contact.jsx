import React, { useState } from "react";
const Contact = (props) => {
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        message:"",
    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;

        setData((prevVal)=>{
            return{
                ...prevVal,
                [name]:value,
            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My Name is : ${data.fullname},
        number is : ${data.phone},
        email is : ${data.email} and
        here is what i want to say : ${data.message}`);

    }
  return (
    <>
      <div className="my-5">
        <div className="text-center"><h1>Contact Us</h1></div>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your mobile no"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                    Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="col-12">
              <button type="submit" className="btn btn-outline-primary">Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
