import React from "react";
import { useEffect } from "react";

import UserData from "./UserData";
import { useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

const Mapping = () => {

    const [ users, setUsers ] = useState([]);



  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("DATAAAAAAAAAAA", data)
      if(data.length > 0){
        setUsers(data);
      }

    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUser(API);
  }, []);

  return (
    <>
      <h1> Mapping</h1>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default Mapping;
