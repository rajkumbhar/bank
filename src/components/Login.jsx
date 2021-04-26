import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import firebase from '../firebase';

function Login() {

    const token = localStorage.getItem("token");
    let loggedIn = true;
    if(token === null) {
        loggedIn = false;
    }

    const [user, setUser] = useState({
        username: "",
        password: "", 
        loggedIn
    });
    

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

     async function loginStatus() {
            const {username, password} = user;
            const loginRef = firebase.database().ref('RegistrationTable');
            
                //loginRef.on('value', (snapshot) => {
                const snapshot = await loginRef.once('value');
                const registrationDetails = await snapshot.val();

                console.log(snapshot.numChildren());
                var i = 0;
                for(let id in registrationDetails) {                
                        i = i + 1;
                        if (username === registrationDetails[id].details.username  && password === registrationDetails[id].details.password ) {
                            localStorage.setItem("loggedInUser", registrationDetails[id].details.username);
                            console.log(registrationDetails[id].details.username);
                            console.log(i);
                            return true;
                        }
                        else if(i === snapshot.numChildren()){ 
                            console.log("user name password not found");
                            return false;
                        }
                }
            //})
    }

    async function checkLogin(event) {
        //Username received from user
        
        var result = await loginStatus();
        if(result) {
            console.log("hello fromm down");
            setUser ({
                loggedIn: true
            }); 
        }
        else{
            alert("username or password wrong");
        }

        event.preventDefault();
    }

    if(user.loggedIn) {
        localStorage.setItem("token", "weuifg2232gu23gy");
        return <Redirect to="/home"/>
    }

    return (
        <div>
            <form className="login-form">
            <h1 className="h1">User Login</h1>
            <input className="l-input" name="username" id="username" type="text" placeholder="Username" value={user.username} onChange={handleChange}/>
            <input className="l-input" name="password" id="password" type="password" placeholder="Password" value={user.password} onChange={handleChange}/>
            <a className="button" onClick={checkLogin}>Login</a>
            <Link className="button" to="/registration">Open New Account</Link>
            </form>
        </div>
    );
}

export default Login;