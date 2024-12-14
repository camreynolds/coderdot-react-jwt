import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Button,Form} from "react-bootstrap"
import "./Login.css"

const Login = () => {
  const navigate = useNavigate()

  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

  const handleInputChange = (event)=>{
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try{
      const response = await fetch("http://localhost:5000/auth/login",{
        method: "POST",
        body: JSON.stringify(formData),
        headers:{
          "Content-Type":"application/json"
        }
      })

      const result = await response.json()
      console.log(result)

      if(result.user._id){
        navigate("/dashboard")
        localStorage.setItem("token",result.token)
      }else{
        console.error("invalid credentials.")
      }
      
    }catch(error){
      console.log(error.message);
    }finally{
      setFormData({
        email:"",
        password:""
      })
    }
  }
  

  return (
    <>
      <div className="center-form">
        <Form onSubmit={handleSubmit}>
          
          <h1>Login</h1>
          
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email"
                name="email"
                placeholder="Enter email"
                value={FormData.email}
                onChange={handleInputChange}
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={FormData.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Login
          </Button>

        </Form>
      </div>
    </>
  )
}

export default Login