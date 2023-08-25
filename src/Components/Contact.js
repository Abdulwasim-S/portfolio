import { useFormik } from "formik";
import React, { useState } from "react";
import  * as yup from 'yup';

const Contact = () => {
  const [state,setState]=useState("");
  const fieldValidationSchema = yup.object(
    {
      email:yup.string().required("Enter email"),
      subject:yup.string().required("Write subject"),
      message:yup.string().required("Write message")
    }
  );
  const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik(
    {
      initialValues:{
        email:"",
        subject:"",
        message:""
      },
      validationSchema:fieldValidationSchema,
      onSubmit:async(message)=>{
        try {
          setState("Please wait...")
          const sendmail=await fetch("https://portfolio-backend-vert.vercel.app/",{
          method:"POST",
          body:JSON.stringify(message),
          headers:{
            "Content-Type":"application/json"
          }
        })
        values.email="";
        values.subject="";
        values.message="";
        setState("Message Sent")
        setTimeout(()=>{setState("")},2000)
        } catch (error) {
          setState("Try Again")
        }
      }
    }
  );
  return (
    <div style={{ height: "100%", background: "black" }}>
      <div
        className="heading pt-5 text-start mb-5"
        style={{ marginLeft: "7%" }}
      >
        Contact
      </div>
      <h1 className="mb-3 text-warning">Use This Form to Contact Me</h1>
      <form className="contact-form mb-5" onSubmit={handleSubmit}>
        <div class="form-group mb-2">
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? <small className="text-warning">{errors.email}</small> :""}
        </div>
        <div class="form-group mb-2">
          <input
            type="subject"
            class="form-control"
            id="subject"
            placeholder="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.subject && errors.subject ? <small className="text-warning">{errors.subject}</small> :""}
        </div>
        <div class="form-group">
          <textarea
            class="form-control mb-2"
            id="message"
            placeholder="message..."
            rows="3"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {touched.message && errors.message ? <small className="text-warning">{errors.message}</small> :""}
        </div>
        <button type="submit" class="btn btn-warning w-100">
          Submit
        </button>
        <small className="text-warning m-5">{state}</small>
      </form>
      <div className="row  justify-content-around pt-5 px-5 pb-2">
        <div className="col-md-6 text-end">
          <i class="fa fa-house m-2" />
          <p>
            {" "}
            4/459/A,Kokkarayan Pettai,
            <br />
            Namakkal-Dt,TamilNadu,
            <br />
            pincode : 638007
          </p>
          <p>
            <i class="fa fa-phone m-2" />
            +91 8778354776
          </p>
        </div>
        <div className="col-md-6 text-start">
          <p>
            <i class="fa fa-solid fa-envelope" /> <br />{" "}
            abdulwasimsmech@gmail.com
          </p>
          <i class="fa-brands fa-linkedin" />
          <br />
          <a
            href="https://www.linkedin.com/in/abdulwasim-shagulhamedhu-562a441a6"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/abdulwasim-<br/>shagulhamedhu-562a441a6
          </a>
        </div>
      </div>
      <footer className="pt-5 pb-5 mt-5 bg-dark">©️ Abdulwasim S 2023</footer>
    </div>
  );
};

export default Contact;
