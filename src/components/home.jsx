import React, { Component } from 'react';
import UserProfile from './userProfile';




class Home extends Component {
    
    //sets sample user profile, please upload your own things
    state = { 
        usernameOne: 'JohnSmith',
        usernameTwo: '',
        bio: 'This is a test bio only. Make sure to add borders to see how big this will be',
        name: 'John Apple Smith',
        displayStuff: '1',
        imageAsFile: '',
        imageAsUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
     }

     

    

   
      
     //style form 

    render() { 
            
        const { usernameOne, usernameTwo, bio, name, displayStuff, imageAsUrl } = this.props;

        return ( 
            <React.Fragment>
            <div 
                className="mc"
                >

                <div className= "form-container"
                style={displayStuff ?{display: 'none'}: {display:'inline'}}
                >
                <p>Create a profile</p>
                <form onSubmit={usernameOne === usernameTwo ? this.props.onSubmit : null } className="profile">
                    <span>username</span>
                    <br/>
                    <input 
                        placeholder="username" 
                        onChange= {(e)=> this.props.onChange(e)}
                        name= "usernameOne"
                        value= {usernameOne}
                        style = {usernameOne === usernameTwo ? {borderColor: "blue"}: {borderColor: "red"}} 
                    ></input>
                    <br/>
                    <input 
                        placeholder="confirm" 
                        onChange={(e)=> this.props.onChange(e)}
                        name= "usernameTwo" 
                        value= {usernameTwo}  
                        style = {usernameOne === usernameTwo ? {borderColor: "blue"}: {borderColor: "red"}} 
                    ></input>
                    <br/>
                    <span>full name</span>
                    <br/>
                    <input 
                        placeholder="first name, last name"
                        onChange= {(e)=> this.props.onChange(e)}
                        name= "name"
                        value= {name}    
                    ></input>
                    <br/>
                    <span>Tell us a little about yourself:</span>
                    <textarea 
                        rows="5" cols="80" id="bio" 
                        onChange= {(e)=> this.props.onChange(e)}
                        name="bio"
                        value={bio}    
                    ></textarea>
                    <br/>
                    <span>Upload a photo:</span>
                    <br/>
                    <input 
                        className="form-button"
                        type="file" 
                        onChange={this.props.imageUploader}
                    />
                    <br/>
                    <button
                    className="form-button"
                    style={displayStuff ?{display: 'none'}: {display:'inline-block'}}>
                        create profile
                    </button>

                </form>
                </div>
                <br/>
                

            <UserProfile 
            createNew = {this.props.createNew}
            imageAsUrl= {imageAsUrl}
            bio = {bio}
            displayStuff = {displayStuff}
            name = {name}
            usernameOne = {usernameOne}

            />
            </div>
           <form 
                action = 'https://github.com/Jmccaskey813/socialist'
                className= "source-code-form"
                >
            <button type='submit' className="source-code-btn">View Souce Code</button>
            </form>
            </React.Fragment>
            
         );
    }
}
 
export default Home;