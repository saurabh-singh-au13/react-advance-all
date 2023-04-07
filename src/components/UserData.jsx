import React from 'react'

const UserData = ({ users }) => {
  return (
    <>
    {
        users.map((curUser) => {
            const { id, name, username, email, address} = curUser;
            const { city, street, zipcode } = curUser.address;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    {/* <td>{address.city}</td> */}
                    <td>{city}, {street}, {" "}, {zipcode}</td>
                </tr>
            )
        })
    }
    
    </>
  )
}

export default UserData