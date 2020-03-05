import React, { Component } from 'react';
import axios from 'axios';



// use to upload images to local storage, set dataURL to state

// const toDataURL = url => fetch(url)
//   .then(response => response.blob())
//   .then(blob => new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.onloadend = () => resolve(reader.result)
//     reader.onerror = reject
//     reader.readAsDataURL(blob)
//   }))


//   toDataURL('file')
//   .then(dataUrl => {
//     console.log('RESULT:', dataUrl)
//   })


class Home extends Component {
    state = { 
        usernameOne: '',
        usernameTwo: '',
        bio: '',
        name: '',
        picture: '',
        displayStuff: ''
     }

     createNew(e) {
         this.setState({
            usernameOne: '',
            usernameTwo: '',
            bio: '',
            name: '',
            picture: '',
            displayStuff: ''
         })
         e.preventDefault();
     }

     onSubmit(e) {
        this.setState({displayStuff: 'true'});
        this.imageUploader() 
        e.preventDefault(); 
     }

     onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     imageUploader= event => {
        console.log(event.target.files[0]);
        this.setState({
            picture: event.target.files[0]
        })
        axios.post('')
     }
     

    render() { 
        const {usernameOne, usernameTwo, bio, name, displayStuff} = this.state;
        return ( 
            <div className="home">
                <div className= "form-container"
                style={displayStuff ?{display: 'none'}: {display:'block'}}
                >
                <p>Create a profile</p>
                <form onSubmit={(e)=>this.onSubmit(e)} className="profile">
                    <span>username</span>
                    <br/>
                    <input 
                        placeholder="username" 
                        onChange= {(e)=> this.onChange(e)}
                        name= "usernameOne"
                        value= {usernameOne}
                    ></input>
                    <br/>
                    <input 
                        placeholder="confirm" 
                        onChange={(e)=> this.onChange(e)}
                        name= "usernameTwo" 
                        value= {usernameTwo}   
                    ></input>
                    <br/>
                    <span>full name</span>
                    <br/>
                    <input 
                        placeholder="first, last.."
                        onChange= {(e)=> this.onChange(e)}
                        name= "name"
                        value= {name}    
                    ></input>
                    <br/>
                    <span>Tell us a little about yourself:</span>
                    <textarea 
                        rows="5" cols="80" id="bio" 
                        onChange= {(e)=> this.onChange(e)}
                        name="bio"
                        value={bio}    
                    ></textarea>
                    <input type="file" onChange={this.imageUploader}/>
                    <button
                    style={displayStuff ?{display: 'none'}: {display:'block'}}
                    >create profile</button>

                </form>
                </div>
                <br/>
                <button
                onClick={(e)=> this.createNew(e)}
                style={displayStuff ?{display: 'block'}: {display:'none'}}
                >
                start over
                </button>

            </div>
         );
    }
}
 
export default Home;