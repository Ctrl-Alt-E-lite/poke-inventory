import React from 'react'

function NotFound() {
  return (
    <div className='container'>
      <div className='page'>
          <h1>Pokemon not found: Error 404</h1>
          <p>The pokemon you're trying to find does not exist.</p>
          <a href='/' text={'Home'}/>
      </div>
      
    </div>
  )
}

export default NotFound
