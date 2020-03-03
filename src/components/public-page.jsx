import React, { Component } from 'react';


class PublicPage extends Component {
    state = { 
        contacts: []
     }

     componentDidMount() {
         this.fetchData();
     }

     componentWillUnmount() {
         this.setState({
             contacts: []
         })
     }

     
    fetchData() {

        this.setState({
            contacts: []
        })
        fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(user => (
        {
        name: `${user.name.first} ${user.name.last}`,
        username: `${user.login.username}`,
        address: `${user.location.state}, ${user.location.city}`,
        email: `${user.email}`,
        pictureUrl: `${user.picture.medium}`
        }
    )) )
    .then(contacts => this.setState({
        contacts,
    }))
    .catch(error => console.log('parsing failed', error))
    }
    
    render() { 
        const { name, username, eaddress, email, pictureUrl } = this.state;
        return (
            <div>
     <img 
      src={this.state.contacts.picture}
      alt="new"
      />
            </div>
          );
    }
}
 
export default PublicPage;