import React from "react";


const Friend = (props)=>{

    const {friend, deleteFriend} = props;

    return(
        <div className="friend">

            <h1>{friend.name}</h1>
            <h2>{`Age ${friend.age}`}</h2>
            <h2>{`Email: ${friend.email}`}</h2>
            <button onClick={()=>deleteFriend(friend.id)}>Delete Friend</button>
        </div>
    )
}


export default Friend;