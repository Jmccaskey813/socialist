import React, { Component } from 'react';
import Generator from './fakeBioGenerator';


class PublicPage extends Component {
    state = { 
        contacts: []
     };

     
     
     componentDidMount() {
         !localStorage.getItem('contacts') ? this.fetchData() : this.sameFriends() ;
    };


    sameFriends() {
       this.setState({
           contacts: JSON.parse(localStorage.getItem('contacts'))
       }) 
    };



    fetchData() {

        this.setState({
            contacts: []
        })
        //needs fixing, you have to fetch friends twice for local storage to take affect. move component lifecycle code to this function.
        localStorage.removeItem('contacts');

    fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(user => (
        {
        name: `${user.name.first} ${user.name.last}`,
        username: `${user.login.username}`,
        address: `${user.location.state}, ${user.location.city}`,
        email: `${user.email}`,
        pictureUrl: `${user.picture.large}`
        }
    )) )
    .then(contacts => this.setState({
        contacts,
    }))
    .catch(error => console.log('parsing failed', error))

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    };
    
    render() { 
        const { usernameOne, bio, name, imageAsUrl } = this.props;
        const { contacts } = this.state;
        return (
            <div>
                <h2>{name}'s News Feed     
                <button className="fetch-btn" onClick={()=> this.fetchData()} >fetch friends</button>
                </h2>
                <hr />
            <div className="contact-card user" key={usernameOne}>
                <div className="left-box">
                    <h4>{name}</h4>
                    <span>{bio}</span>
                </div>

                <div className="right-box"> 
                     <p>{usernameOne}</p>
                     <img  src= {imageAsUrl} alt= {imageAsUrl} />
                        </div>
            </div>
            { contacts.map(contact => {
                const {username, pictureUrl, name} = contact;
                return (
                    <div className="contact-card" key={username}>
                        <div className="left-box">
                            <h4>{name}</h4>
                            <span><Generator /></span>
                        </div>

                    <div className="right-box"> 
                         <p>{username}</p>
                         <img  src= {pictureUrl} alt= {pictureUrl} />
                    </div>
                    
                    </div>
                )
            })}
            </div>
          );
    };
};
 
export default PublicPage;