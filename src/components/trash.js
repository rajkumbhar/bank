<div className="sm-container">
<div className="sm-title">Send Money</div>
<form >
    <div className="sm-user-details">
        <div className="sm-input-box">
            <span className="sm-input-name">B name</span>
            <input className="sm-input" type="text" placeholder="B Name" autoComplete="nope"></input>
        </div>
        <div className="sm-input-box">
            <span className="sm-input-name">A Number</span>
            <input className="sm-input" type="number" placeholder="Account Number" autoComplete="nope"></input>
        </div>
        <div className="sm-input-box">
            <span className="sm-input-name">Amount</span>
            <input className="sm-input" type="text" placeholder="Amount" autoComplete="nope"></input>
        </div>
        <div className="sm-input-box">
            <span className="sm-input-name">Phone Number</span>
            <input className="sm-input" type="text" placeholder="Optional" autoComplete="nope"></input>
        </div>
        <div className="sm-tran-type">
            <input type="radio" name="transaction" id="NEFT"/>
            <input type="radio" name="transaction" id="RTGS"/>
            <input type="radio" name="transaction" id="IMPS"/>

            <span className="sm-tran-title">Payment Type:</span>
            <div className="sm-catagory">
                <label for="tran-NEFT">
                    <span className="sm-tran NEFT"></span>
                    <span className="sm-transaction">NEFT</span>
                </label>
                <label for="tran-RTGS">
                    <span className="sm-tran RTGS"></span>
                    <span className="sm-transaction">RTGS</span>
                </label>
                <label for="tran-IMPS">
                    <span className="sm-tran IMPS"></span>
                    <span className="sm-transaction">IMPS</span>
                </label>
            </div>
        </div>
        <div className="sm-button">
        <input type="submit" name="" value="Send Money"/>
    </div>
    </div>
</form>
</div>