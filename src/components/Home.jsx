import React, {useEffect, useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import AddMoney from './AddMoney';
import SendMoney from './SendMoney';
import Registration from './Registration';
import firebase from '../firebase';

function Home() {

    //This usestate is for rendering diff components (send money, add money)
    const [active, setActive] = useState("SendMoney");

    //This is for fetchiing live user data from db
    const [liveUserData, setLiveUserData] = useState([]);

    //This is for data load or not
    const [loading, setLoading] = useState(false);

    const liveUser = localStorage.getItem("loggedInUser");
    const token = localStorage.getItem("token");
    
    let loggedIn = true;
    if(token == null) {
        loggedIn = false;
    }





    useEffect(()=>{
        async function fetchUserData() {
            const dbRef = firebase.database().ref('RegistrationTable');
            //dbRef.on('value', (snapshot) => {
                const snapshot = await dbRef.once('value');
                const registrationDetails = await snapshot.val();
                
                const liveUserData = [];
                for(let id in registrationDetails) {
                    console.log(registrationDetails[id]);
                    console.log("live user: "+liveUser);
                    console.log("db username: "+registrationDetails[id].details.username);

                    if(liveUser === registrationDetails[id].details.username){
                        liveUserData.push(registrationDetails[id])
                        //console.log(liveUserData);
                    }
                }
                setLiveUserData(liveUserData);
                setLoading(true);
            //});
        }    
        fetchUserData();    
    }, []);

    

    if(loggedIn === false) {
        return <Redirect to="/"/>
    }

    var time = new Date().toDateString();
    var getTime = time;



    /* return (
        <div >
            
            {loading ? (liveUserData[0].details.name) : <h1>Loading</h1>}
        </div>
    ); */
        
            if(loading){
                return (
                    <div>
                         <div className="h-welcomePlate">
                            <div className="h-welcomePlate-details">
                                <h1 className="h-title">Welcome {liveUserData[0].details.name}</h1>
                                <div className="h-time-logout">
                                    <p className="h-time">{getTime}</p>
                                    <Link className="h-logout-btn" to="/logout">Logout</Link>
                                </div>
                            </div>
                         </div>
                        
                        <div className="h-acc">
                            <div className="h-acc-details">
                                <p className="h-details"><span>Account Name:</span> {liveUserData[0].details.name}</p>
                                <p className="h-details"><span>Account Number:</span> {liveUserData[0].details.name}</p>
                                <p className="h-details"><span>Account Type:</span> {liveUserData[0].details.accType}</p>
                                <p className="h-details"><span>Account Balance:</span> Rs. {liveUserData[0].details.amount}/-</p>
                                <p className="h-details"><span>Address:</span> {liveUserData[0].details.address}</p>
                            </div>
                        </div>
                        
                        <div className="h-btn">
                            <button className="h-action-btn" onClick={()=> setActive("SendMoney")}>Send Moeny</button>
                            <button className="h-action-btn" onClick={()=> setActive("AddMoney")}>Add Money</button>
                            <button className="h-action-btn" onClick={()=> setActive("Registration")}>New Account</button>
                        </div>
            
                        <div>
                        {active === "SendMoney" && <SendMoney />}
                        {active === "AddMoney" && <AddMoney />}
                        {active === "Registration" &&<Registration />}
                        </div>
                    </div>
                ); 
            }
            else {
                return (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )
            }
             
        
    }


export default Home;