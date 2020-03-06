import React, { Component } from 'react';
import { storage } from './firebase';
import UserProfile from './userProfile';




class Home extends Component {
    // state = { 
    //     usernameOne: '',
    //     usernameTwo: '',
    //     bio: '',
    //     name: '',
    //     displayStuff: '',
    //     imageAsFile: '',
    //     imageAsUrl: ''
    //  }

    //for testing userProfile Only
    state = { 
        usernameOne: 'JohnSmith',
        usernameTwo: '',
        bio: 'This is a test bio only. Make sure to add borders to see how big this will be',
        name: 'John Apple Smith',
        displayStuff: '1',
        imageAsFile: '',
        imageAsUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
     }

     


    handleFirebaseUpload = e => {
        const { imageAsFile } = this.state;
        console.log('uploaded started');
        if (imageAsFile=== '') {
            console.log(`not an image, the image file is a ${typeof(imageAsFile)}`)
        }
        const uploadTask= storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        uploadTask.on('state_changed',
        (snapShot) => {
            console.log(snapShot)
        }, (err) => {
            console.log(err)
        }, () => {
            storage.ref('images').child(imageAsFile.name).getDownloadURL()
            .then(fireBaseUrl => {
                this.setState({
                    imageAsUrl: fireBaseUrl
                })
            })
        }
        )

    }

    
     createNew(e) {
         this.setState({
            usernameOne: '',
            usernameTwo: '',
            bio: '',
            name: '',
            displayStuff: '',
            imageAsFile: '',
            imageAsUrl: ''
         })
         e.preventDefault();
     }

     onSubmit= (e) => {
        this.setState({displayStuff: 'true'});
        this.handleFirebaseUpload();
        e.preventDefault(); 
        console.log(this.state.imageAsFile);
     }

     onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     imageUploader = event => {
        const image = event.target.files[0];
        this.setState({
            imageAsFile: image
        });
        
     }

      
     

    render() { 
        // add form validation
            
        const {usernameOne, usernameTwo, bio, name, displayStuff, imageAsUrl} = this.state;
        return ( 
            <div className="home">
                <div className= "form-container"
                style={displayStuff ?{display: 'none'}: {display:'block'}}
                >
                <p>Create a profile</p>
                <form onSubmit={this.onSubmit} className="profile">
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
                    <span>Upload a photo of yourself:</span>
                    <input 
                        type="file" 
                        onChange={this.imageUploader}
                    />

                    <button
                    style={displayStuff ?{display: 'none'}: {display:'block'}}>
                        create profile
                    </button>

                </form>
                </div>
                <br/>
                <button
                onClick={(e)=> this.createNew(e)}
                style={displayStuff ?{display: 'block'}: {display:'none'}}
                >
                start over
                </button>

            <UserProfile 
            imageAsUrl= {imageAsUrl}
            bio = {bio}
            displayStuff = {displayStuff}
            name = {name}
            usernameOne = {usernameOne}

            />
            </div>
         );
    }
}
 
export default Home;