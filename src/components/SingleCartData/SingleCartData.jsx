import React from 'react'

const SingleCartData = ({singleData}) => {
    const {phone, firstName, dob} = singleData;
    
  return (
    <div>
        <hr />
        <h1> Name: {firstName} </h1>
        <h3> Phone: {phone} </h3>
        <h3> DOB: {dob} </h3>
        <hr />
    </div>
  )
}

export default SingleCartData