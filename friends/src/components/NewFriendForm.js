import React from "react";

const initialFormValue = {
    name:"",
    age:"",
    email:""
}

class NewFriendForm extends React.Component{
    state={
        name:"",
        age:"",
        email:""
    }
    updateForm = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submit = (e)=>{
        e.preventDefault();
        this.props.addFriend(this.state);
        this.setState(
            initialFormValue
        )
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <label>Name:
                        <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.updateForm}/>
                    </label>
                    <label>Age:
                        <input
                        name="age"
                        type="text"
                        value={this.state.age}
                        onChange={this.updateForm}
                        />
                    </label>
                    <label>Email:
                        <input
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.updateForm}
                        />
                    </label>
                    <button>Add New Friend</button>
                </form>
            </div>
        )
    }
} 

export default NewFriendForm;