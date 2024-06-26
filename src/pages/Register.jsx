import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {
  const [ inputs, setInputs ] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [err, setError ] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
     console.log(JSON.stringify( inputs ))

    e.preventDefault()
    try{
      fetch("http://127.0.0.1:8800/api/auth/register",{
        method:"POST",
				headers: {
				  "Content-Type": "application/json",
				  // 'Content-Type': 'application/x-www-form-urlencoded',
				},
				body:JSON.stringify( inputs ),
      }).then((res)=>{
        res.json().then((r)=>{
          console.log(r)
        })
        console.log(res)
      })
      navigate("/login");
      /*
      const res = await axios.post("http://127.0.0.1:8800/api/auth/register", inputs)
      console.log(res)
      */
    }catch(err){
      setError(err.response.data);
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
        <input required type='text' placeholder='email' name='email' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>REGISTER</button>
        { err && <p> {err} </p> }
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register