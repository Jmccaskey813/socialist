
import React, { Component } from 'react';
import './App.css';
import { storage } from '../src/components/firebase';
import NavBar from './components/nav-bar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PublicPage from './components/public-page';
import Home from './components/home';



class App extends Component {

  state = { 
    usernameOne: 'JohnSmith',
    usernameTwo: '',
    bio: 'This is a test bio only. Make sure to add borders to see how big this will be',
    name: 'John Apple Smith',
    displayStuff: '1',
    imageAsFile: '',
    imageAsUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
   }

   componentWillUnmount() {
     let localUserData = JSON.parse(localStorage.getItem('user'));
     if (this.state === localUserData) {
       this.setState({
         localUserData
       })
     };
     console.log(localUserData);
   };

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


 createNew= (e)=> {
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
     localStorage.removeItem('user');
 }

 onSubmit= (e) => {
    this.setState({displayStuff: 'true'});
    this.handleFirebaseUpload();
    e.preventDefault(); 
    console.log(this.state.imageAsFile);
    localStorage.setItem('user', JSON.stringify(this.state))
 }

 onChange = (e)=> {
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
    return ( 
      <Router>
        <div>
          <NavBar />

          <Route path='/public-page'>
          <PublicPage
            {...this.state}
          />
          </Route>
          <Route exact path='/'>
              <Home
                onChange = {this.onChange}
                onSubmit = {this.onSubmit}
                imageUploader = { this.imageUploader}
                createNew = {this.createNew}
                {...this.state}
          />
          </Route>

        </div>
      </Router>

     );
  }
}
 
export default App;