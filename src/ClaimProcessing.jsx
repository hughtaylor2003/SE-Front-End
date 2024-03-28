import { useState } from 'react';
import ProfilePic from './assets/hum.jpg';
import Search from './assets/search.png';
import Plus from './assets/plus.svg';
import Previous from './assets/Previous.svg';
import ClaimResponse from './ClaimResponse'; // Updated import
import './ClaimProcessing.css';
import AccountManagement from './AccountManagement';
import CurrentClaims from './CurrentClaims';
import PreviousClaims from './PreviousClaims';

function App() {

  const [page, setPage] = useState(<ClaimResponse />); // Updated default page

  return (
    <>
      <div className='Content-Header'>
        <div className='Side-Panel'>
          <div className='Profile-Info'>
            <img className='Profile-Pic' src={ProfilePic}></img>
            <h2>Humayun Amin</h2>
            <h3>System Admin</h3>
          </div>
          <div className='Options-Container'>
            {/* Updated onClick handler */}
            <div className='Claim-Parent' onClick={() => setPage(<ClaimResponse />)}> 
              <div>Review Claim</div>
              <img className='Plus-Icon' src={Plus}></img>
            </div>
            <div className='Claim-Parent' onClick={() => setPage(<AccountManagement />)}>
              <div>Account management</div>
              <img className='Search-Icon' src={Search}></img>
            </div>
            <div className='Claim-Parent' onClick={() => setPage(<PreviousClaims />)}>
              <div>View Past claims</div>
              <img className='Previous-Icon' src={Previous}></img>
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
