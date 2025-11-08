import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
          <div className='row'>
             <div className='col-6 p-5'>
                <img src="media/images/largestBroker.svg"/>
             </div>
             <div className='col-6 p-5 mt-5'>
              <h1>Largest stock broker in India</h1>
              <p className='mb-5'>
                2+ million Zerodha c;ients contribute to over 15% of all retail order
                volumes in india daily by trading and investing in:
              </p>
              <div className='row'>
                <div className='col-6'>
                    <uL>
                <li>
                  <p>Futures and Options </p>
                </li>
                 <li>
                  <p>Commodity derivatives </p>
                </li>
                 <li>
                  <p>Currency derivatives </p>
                </li>
              </uL>
                </div>
                <div className='col-6'>
                     <uL>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                 <li>
                  <p>Direct mutual funds</p>
                </li>
                 <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </uL>
                </div>
              </div>
             <img src="media\images\pressLogos.png" style={{width:"90%"}}/>
             </div>
          </div>
        </div>
      );
}

export default Awards ;