import React from 'react'
import { NavLink } from 'react-router-dom'

function ErorrPage() {
  return (
    <>
      <div className="notfound">
        <div id="notgound">
          <div className='notfound-404'>
            <h1>Oops!</h1>
            <h2><b>404</b> - Page Not Found</h2>
            <p className="mb-5">
              The page you  are looking for might have been moved or deleted.{' '}
              Please check the URL and try again. If it continues to occur, please contact our support team.
            </p>
            <NavLink to="/"><button type="button" class="btn btn-primary">Back to Home</button></NavLink>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default ErorrPage
