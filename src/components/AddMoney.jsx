import React from 'react';

function AddMoney() {
    return(
        <div className="r-body">
        <div className="r-container">
            <div className="r-title">Add Money</div>
            <form action="#">
                 <div className="r-user-details">
                    <div className="r-input-box">
                         <span className="r-details">Amount</span>
                         <input className="r-input" type="number" placeholder="Amount" autoComplete="nope"></input>
                     </div>

                     <div className="r-input-box">
                         <span className="r-details">Card Number</span>
                         <input className="r-input" type="number" placeholder="Card Number" autoComplete="nope"></input>
                     </div>
                     <div className="r-input-box">
                         <span className="r-details">Expiry Date</span>
                         <input className="r-input" type="date" placeholder="Expiry Date" autoComplete="nope"></input>
                     </div>
                     <div className="r-input-box">
                         <span className="r-details">CVV Number</span>
                         <input className="r-input" type="numebr" placeholder="CVV Number" autoComplete="nope"></input>
                     </div>
                     <div className="r-input-box">
                         <span className="r-details">Name on Card</span>
                         <input className="r-input" type="text" placeholder="Name On card" autoComplete="nope"></input>
                     </div>
                     <div className="r-input-box">
                         <span className="r-details">Note</span>
                         <input className="r-input" type="text" placeholder="Note" autoComplete="nope"></input>
                     </div>

                 </div>
                 <div className="r-button">
                     <input type="submit" name="" value="Add Money"/>
                 </div>
                 
            </form>
        </div>
        
     </div>
    );
}

export default AddMoney;