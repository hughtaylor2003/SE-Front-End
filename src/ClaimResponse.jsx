import React from 'react';
import './ClaimResponse.css';

export default function ClaimResponse() {
  return (
    <div className='Form-Parent'>
      <h1>Claim Processing</h1>
      <div className="FormWrapper">
        <div className="FormContainer">
          <form action="/submit-response" method="POST">
            <h2>Your Response to Claim</h2>
            <div className="FormElement">
              <label htmlFor="claimResponse" className="FormLabel">Please Accept or Reject Claim</label>
              <select id="claimResponse" className="FormInput">
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </select>
            </div>
            <div className="FormElement">
              <label htmlFor="explanation" className="FormLabel">Brief Explanation for Claim</label>
              <textarea id="explanation" className="FormInput" placeholder='Type here...' rows="4"></textarea>
            </div>
            <button className="FormButton">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
