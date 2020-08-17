import React from 'react'
function UserModel(props) {
    return (
        <div className="userModal">
        <p> {props.name} </p>
        <p> {props.username} </p>
        <p> {props.email} </p>
        <p className="sub-titles">Address:</p>
        <p> {props.addressStreet}</p>
        <p> {props.addressSuite}</p>
        <p> {props.addressCity}</p>
        <p> {props.addressZipcode}</p>
        <p className="sub-titles">Address-Geo:</p>
        <p> {props.addressGeoLat}</p>
        <p> {props.addressGeoLng}</p>

        <p> {props.phone} </p>
        <p> {props.website} </p>
        <p className="sub-titles">Company:</p>
        <p> {props.companyName}</p>
        <p> {props.companyCatchPhrase}</p>
        <p> {props.companyBs}</p>
        </div>
    )
}
       
export default UserModel;