import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import firebase from '../firebase'

function Registration() {

    var id = 0;

    const [details, setDetails] = useState({
        id:'',
        accType: '',
        name:'',
        phoneNumber:'',
        DOB:'',
        address:'',
        citizenship:'',
        maritalStatus:'',
        occupation:'',
        aadharCard:'',
        panCard:'',
        username:'',
        password:'',
        gender:'',
        amount:''
    });

    function handleChange(e) {
        const {name, value} = e.target; 
         setDetails(prev => {
            return {
                ...prev,
                [name]: value
            }
        }); 
    }

    function registerCustomer(e) {
        
        const registerRef = firebase.database().ref("RegistrationTable");
        const todo = {details}
        registerRef.push(todo);
        alert("Successfully Registered")
        e.preventDefault();
    }

    return(
        <div className="r-body">
           <div className="r-container">
               <div className="r-title">Registration</div>
               <form action="#">
                    <div className="r-user-details">

                        <div className="r-input-box">
                            <span className="r-details">Account Type</span>
                            <select onChange={handleChange} value={details.accType} className="r-option" name="accType" id="accType" required>
                                <option value="" defaultValue disabled>Select Account Type</option>
                                <option value="Savings">Savings</option>
                                <option value="Current">Current</option>
                            </select>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Full Name</span>
                            <input onChange={handleChange} value={details.name} name="name" className="r-input" type="text" placeholder="Enter Full Name" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Phone Number</span>
                            <input onChange={handleChange} value={details.phoneNumber} name="phoneNumber" className="r-input" type="number" placeholder="Phone Number" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Date of Birth</span>
                            <input onChange={handleChange} value={details.DOB} name="DOB" className="r-input" type="date" placeholder="Date of Birth" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Address</span>
                            <input onChange={handleChange} value={details.address} name="address" className="r-input" type="text" placeholder="Address" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Citizenship</span>
                            <input onChange={handleChange} value={details.citizenship} name="citizenship" className="r-input" type="text" placeholder="Enter your country name" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Marital Status</span>
                            <input onChange={handleChange} value={details.maritalStatus} name="maritalStatus" className="r-input" type="text" placeholder="Single, Married or Divorsed" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Occupation</span>
                            <input onChange={handleChange} value={details.occupation} name="occupation" className="r-input" type="text" placeholder="Enter your job title" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Aadhar Card Number</span>
                            <input onChange={handleChange} value={details.aadharCard} name="aadharCard" className="r-input" type="number" placeholder="Enter your Aadhar card number" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Pan Card Number</span>
                            <input onChange={handleChange} value={details.panCard} name="panCard" className="r-input" type="number" placeholder="Enter your Pan card number" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Username</span>
                            <input onChange={handleChange} value={details.username} name="username" className="r-input" type="text" placeholder="Username" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Password</span>
                            <input onChange={handleChange} value={details.password} name="password" className="r-input" type="password" placeholder="Password" autoComplete="nope"></input>
                        </div>

                        <div className="r-input-box">
                            <span className="r-details">Enter Amount to credit on your account</span>
                            <input onChange={handleChange} value={details.amount} name="amount" className="r-input" type="number" placeholder="Amount should be greater than 5000" autoComplete="nope"></input>
                        </div>
                    </div>

                    <div className="r-gender-details">

                        <input type="radio" name="gender" id="dot-1" checked={details.gender === "Male"} onChange={handleChange} value="Male"/>
                        <input type="radio" name="gender" id="dot-2" checked={details.gender === "Female"} onChange={handleChange} value="Female"/>
                        <input type="radio" name="gender" id="dot-3" checked={details.gender === "PNS"} onChange={handleChange} value="PNS"/>

                        <span className="r-gender-title">Gender</span>
                        <div className="r-catagory">
                            <label htmlFor="dot-1">
                                <span className="r-dot one"></span>
                                <span className="r-gender">Male</span>
                            </label>
                            <label htmlFor="dot-2">
                                <span className="r-dot two"></span>
                                <span className="r-gender">Female</span>
                            </label>
                            <label htmlFor="dot-3">
                                <span className="r-dot three"></span>
                                <span className="r-gender">Prefer Not to Say</span>
                            </label>
                        </div>
                    </div>

                    <div className="r-button">
                        <input type="submit" name="" value="Register" id="registerButton" onClick={registerCustomer}/>
                    </div>
                    <div className="r-reg-btn">
                        <Link to="/" ><input type="submit" name="" value="Log In"/></Link>
                    </div>
                    
               </form>
           </div>
           
        </div>
    );
}

export default Registration;