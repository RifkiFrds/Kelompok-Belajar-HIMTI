import React from 'react'


function Profile(props) {
  return (
    <div className='card'>
        <h1>{props.judul}</h1>
        <p>{props.teks}</p>
    </div>
  )
}

export default Profile
