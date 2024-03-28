import React from 'react';
import './ViewPendingClaims.css';

export default function ViewPendingClaims() {
  return (
    <div className='Form-Parent'>
      <h1>Claimants Awaiting Processing</h1>
      <div className="FormWrapper">
        <div className="FormContainer">
          <h2>Please Select a Claimant to Proceed</h2>
          <div className="DropdownContainer">
            <select className="FormInput">
              <option value="claimant1">Claimant 1</option>
              <option value="claimant2">Claimant 2</option>
              <option value="claimant3">Claimant 3</option>
              <option value="claimant4">Claimant 4</option>
              <option value="claimant5">Claimant 5</option>
              <option value="claimant6">Claimant 6</option>
              <option value="claimant7">Claimant 7</option>
              <option value="claimant8">Claimant 8</option>
              <option value="claimant9">Claimant 9</option>
              <option value="claimant10">Claimant 10</option>
            </select>
          </div>
          <button className="FormButton">Submit</button>
        </div>
      </div>
    </div>
  );
}
