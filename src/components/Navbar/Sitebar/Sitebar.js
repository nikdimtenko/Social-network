import React from 'react';
import s from './Sitebar.module.css';
import Friend from "./Friend/Friend";

let friendList = [
    { id: 1, name: "Medi", imgSrc: "https://cdn.shopifycloud.com/hatchful-web/assets/01273596e4e92b9de8e8a11cd4ed455e.png"},
    { id: 2, name: "Drobina", imgSrc: "https://cdn.shopifycloud.com/hatchful-web/assets/eab093a0a25c7994ab8cc0b64eaadd00.png"},
    { id: 3, name: "Ruby", imgSrc: "https://cdn.shopifycloud.com/hatchful-web/assets/c3a241ae6d1e03513dfed6f5061f4a4b.png"}
];

let listFriendToSitebar = friendList.map( name => <Friend key={name.id} name={name.name} imgSrc={name.imgSrc}/> )


const Sitebar = () => {
    return (
    <div  className={s.grid}>
        <div className={s.headerFriends}>Friends</div>
        {listFriendToSitebar}
    </div>
    )
};

export default Sitebar;
