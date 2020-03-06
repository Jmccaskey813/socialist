import React, { Component } from 'react';

class UserProfile extends Component {
    state = { 

     }

     
    render() { 
        console.log(this.props.test)
        
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
        <button className='backBtn'><span>&#8592;</span></button>
        </div>
        
        </div>
         );
    }
}
 
export default UserProfile;