import React, {useState} from "react";
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })
  return (
      <div className='formContainer'>
        <form className='form'>
            <input className='form-input' name='firstName'/>
            <input className='form-input' name='lastName'/>
            <input className='form-input' name='emailAdress'/>
            <div className="form-checkbox">
                <input
                    id="okayToEmail"
                    type="checkbox"
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button className='form-submit'>submit</button>
        </form>
      </div>
  )
}

export default App;
