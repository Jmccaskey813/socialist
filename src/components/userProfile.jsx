import React, { Component } from 'react';

class UserProfile extends Component {
    

     createNew= (e)=> {
        this.props.createNew(e);
     }

     
    render() { 
        
        const { displayStuff, usernameOne, bio, imageAsUrl, name } = this.props;
        return ( 
        <div 
        
            style= {displayStuff ? {display: 'block'} : {display : 'none'}}
            className="userProfileContainer"
        > 
        <div className="left-user">
            <span>{usernameOne}</span>
            <br/>
            <img src={imageAsUrl} alt="profileImage"/>
        </div>

        <div className="right-user">

        <span>about {name}:</span>
        <hr/>
        <p>{bio}</p>
        <button
                className= "form-button"
                onClick={(e)=> this.createNew(e)}
                style={displayStuff ?{display: 'inline-block'}: {display:'none'}}
                >
                start over
                </button>
        </div>
        
        </div>
         );
    }
}
 
export default UserProfile;