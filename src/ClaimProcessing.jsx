import { useState } from 'react';
import ProfilePic from './assets/johnny.png';
import Search from './assets/search.png';
import Plus from './assets/plus.svg';
import Previous from './assets/Previous.svg';
import ClaimResponse from './ClaimResponse';
import './ClaimProcessing.css';
import AccountManagement from './AccountManagement';
import CurrentClaims from './CurrentClaims';
import PreviousClaims from './PreviousClaims';
import ViewPendingClaims from './ViewPendingClaims'; // Added import for ViewPendingClaims

function App() {
  const [page, setPage] = useState(<ClaimResponse />);

  return (
    <>
      <div className='Content-Header'>
        <div className='Side-Panel'>
          <div className='Profile-Info'>
            <img className='Profile-Pic' src={ProfilePic} alt="Profile"></img>
            <h2>John Smith</h2>
            <h3>Line Manager</h3>
          </div>
          <div className='Options-Container'>
            <div className='Claim-Parent' onClick={() => setPage(<ViewPendingClaims />)}> 
              <div>View Pending Claims</div>
              <img className='Search-Icon' src={Search} alt="Search"></img>
            </div>
            <div className='Claim-Parent' onClick={() => setPage(<ClaimResponse />)}> 
              <div>Review Claim</div>
              <img className='Plus-Icon' src={Plus} alt="Plus"></img>
            </div>
            <div className='Claim-Parent' onClick={() => setPage(<PreviousClaims />)}>
              <div>View Past claims</div>
              <img className='Previous-Icon' src={Previous} alt="Previous"></img>
            </div>
          </div>
        </div>
        <div className='Form-Parent'>
          {page}
        </div>
      </div>
    </>
  );
}

export default App;
