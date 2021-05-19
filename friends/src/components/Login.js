
import React from "react";
import axios from "axios";

class Login extends React.Component{
    state = {
        credential:{
            username:"Lambda School",
            password:"i<3Lambd4"
        }
    }
    updateInputs = (e)=>{
        this.setState({
            credential:{
                ...this.state.credential,
                [e.target.name]: e.target.value
            }
        })
    }

    login = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state.credential)
            .then(res=>{
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/friends")
            })
            .catch(err=>{
                console.log(err);
            })
    }

    render(){
        return(

            <form onSubmit={this.login}>
                <input
                    name="username"
                    type="text"
                    value={this.state.credential.username}
                    onChange={this.updateInputs}
                />
                <input
                    name="password"
                    type="text"
                    value={this.state.credential.password}
                    onChange={this.updateInputs}
                />
                <button>Login In</button>
            </form>)
    }
}

export default Login;