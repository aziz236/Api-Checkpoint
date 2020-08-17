import React, { useState, useEffect } from "react";
import axios from "axios";
import UserModel from './components/UserModel'
function UserList() {
 const [data, setData] = useState( [] );
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
       /*"https://hn.algolia.com/api/v1/search?query=redux"*/
       "https://jsonplaceholder.typicode.com/users"
     );
     setData(result.data);
   };
   fetchData();
 }, []);
 console.log(data)
 return (
  <ul>
     {data.map(item => (
       <div className="modal-placement" style={{display:"flex",flexDirection:"row"}} key={item.id}>
       <UserModel 
       name={item.name} 
       username={item.username} 
       email={item.email} 

       addressStreet={item.address.street}
       addressSuite={item.address.suite}
       addressCity={item.address.city}
       addressZipcode={item.address.zipcode}       
       addressGeoLat={item.address.geo.lat}
       addressGeoLng={item.address.geo.lng}

       phone={item.phone} 
       website={item.website} 
       companyName={item.company.name}
       companyCatchPhrase={item.company.catchPhrase}
       companyBs={item.company.bs}/>
       </div >
     ))}
   </ul>
 )
}
  
export default UserList;
