import React from 'react';
import './ClaimResponse.css';

export default function ClaimResponse() {
  return (
    <div className='Form-Parent'>
      <h1>Claim Processing</h1>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form action="/submit-response" method="POST">
            <h2>Your Response to Claim</h2>
            <div class="formbold-mb-3">
              <label for="claimResponse" class="formbold-form-label">Please Accept or Reject Claim</label>
              <select id="claimResponse" class="formbold-form-input">
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </select>
            </div>
            <div class="formbold-mb-3">
              <label for="explanation" class="formbold-form-label">Brief Explanation for Claim</label>
              <textarea id="explanation" class="formbold-form-input" placeholder='Type here...' rows="4"></textarea>
            </div>
            <button class="formbold-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}