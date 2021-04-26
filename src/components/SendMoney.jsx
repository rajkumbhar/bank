import React from 'react';

function SendMoney(props) {
    return(
        <div className="r-body">
        <div className="r-container">
            <div className="r-title">Send Money</div>
            <form action="#">
                 <div className="r-user-details">

                     <div className="r-input-box">
                         <span className="r-details">Beneficiary name</span>
                         <input className="r-input" type="text" placeholder="Beneficiary name" autoComplete="nope"></input>
                     </div>

                     <div className="r-input-box">
                         <span className="r-details">Beneficiary Account Number</span>
                         <input className="r-input" type="number" placeholder="Beneficiary Account Number" autoComplete="nope"></input>
                     </div>
                     <div className="r-input-box">
                         <span className="r-details">Confirm Account Number</span>
                         <input className="r-input" type="number" placeholder="Confirm Account Number" autoComplete="nope"></input>
                     </div>

                     <div className="r-input-box">
                         <span className="r-details">Amount</span>
                         <input className="r-input" type="number" placeholder="Amount" autoComplete="nope"></input>
                     </div>

                     <div className="r-input-box">
                         <span className="r-details">Phone Number</span>
                         <input className="r-input" type="numebr" placeholder="Phone Number" autoComplete="nope"></input>
                     </div>

                     <div className="r-input-box">
                         <span className="r-details">Note</span>
                         <input className="r-input" type="text" placeholder="Note" autoComplete="nope"></input>
                     </div>

                 </div>

                 <div className="r-gender-details">

                     <input type="radio" name="gender" id="NEFT"/>
                     <input type="radio" name="gender" id="RTGS"/>
                     <input type="radio" name="gender" id="IMPS"/>

                     <span className="r-gender-title">Payment Type</span>
                     <div className="r-catagory">
                         <label htmlFor="NEFT">
                             <span className="r-dot one"></span>
                             <span className="r-gender">NEFT</span>
                         </label>
                         <label htmlFor="RTGS">
                             <span className="r-dot two"></span>
                             <span className="r-gender">RTGS</span>
                         </label>
                         <label htmlFor="IMPS">
                             <span className="r-dot three"></span>
                             <span className="r-gender">IMPS</span>
                         </label>
                     </div>
                 </div>

                 <div className="r-button">
                     <input type="submit" name="" value="Send Money"/>
                 </div>
                 
            </form>
        </div>
        
     </div>
    );
}

export default SendMoney;