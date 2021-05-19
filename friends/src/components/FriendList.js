import axios from 'axios';
import React from 'react';
import Friend from "./Friend";
import NewFriendForm from "./NewFriendForm";



class FriendList extends React.Component{
    state={
        friends:[]
    }

    componentDidMount(){
        this.getData();
    }

    getData = ()=>{
        const token = localStorage.getItem("token");
        axios.get("http://localhost:5000/api/friends",{
            headers:{
                authorization: token
            }
        }).then(res=>{
            console.log(res.data);
            this.setState({
                friends: res.data
            })
        }).catch(err=>{
            console.log("something is wrong");
        })

    }

    addData = (newFriend)=>{
        const token = localStorage.getItem("token");
        axios.post("http://localhost:5000/api/friends", newFriend, {
            headers:{
                authorization: token
            }
        })
        .then(res=>{
            this.setState({
                friends: res.data
            });
        })
    }
    deleteFriend = (id)=>{
        const token = localStorage.getItem("token");
        axios.delete(`http://localhost:5000/api/friends/${id}`, {
            headers:{
                authorization: token
            }
        })
        .then(res=>{
            this.setState({
                friends:res.data
            });
        })
    }
    render(){
        return(
            <div>
                <h1>Friend List</h1>
                {this.state.friends.map(friend=>{
                    return <Friend key={friend.id} friend={friend} deleteFriend={this.deleteFriend}/>
                })}
                <NewFriendForm addFriend={this.addData}/>

            </div>
        )
    }
}

export default FriendList;