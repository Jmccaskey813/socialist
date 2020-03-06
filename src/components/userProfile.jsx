import React, { Component } from 'react';


class UserProfile extends Component {
    state = { 
        willShow: true
     }
    render() { 
        console.log(this.props.test)
        return ( 
            <div> It works!</div>
         );
    }
}
 
export default UserProfile;