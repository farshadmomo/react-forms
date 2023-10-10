import React, {useState} from "react";
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNews: true
    })
    function handleChange(event) {
        const {name,value,type,checked} = event.target
        setFormData(prevState => ({
            ...prevState,
            [name] : type === "checkbox" ? checked : value
        }))

        if (formData.joinedNews) {
            console.log("thanks for signing up for our newsletter")
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.passwordConfirm) {
            console.log("successfully logged in")
            console.log(formData)
        }
        else {
            console.log("passwords do not match")
            return
        }
    }
  return (
      <div className='formContainer'>
        <form className='form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                className='form-input'
                value={formData.email}
                name='email'
            />
            <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className='form-input'
                value={formData.password}
                name='password'
            />
            <input
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                className='form-input'
                value={formData.passwordConfirm}
                name='passwordConfirm'
            />
            <div className="form-checkbox">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="joinedNews"
                    onChange={handleChange}
                    checked={formData.joinedNews}
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button className='form-submit'>submit</button>
        </form>
      </div>
  )
}

export default App;
