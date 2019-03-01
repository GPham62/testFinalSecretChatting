import React, { Component } from 'react'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login'
import jwt from 'jsonwebtoken'
import localStorage from 'local-storage'

// import '../../css/signin.css'
export default class SignIn extends Component {
  constructor(props){
    super(props)
  }

  responseFacebook = (response) => {
    console.log(response);

    axios.post('http://localhost:5000/api/users/',{
      username: response.name,
      email: response.email,
      avatar: response.picture.data.url,
      facebookProvider:{
        type:{
          id: response.id,
          token: response.accessToken
        }
      }
    })
      .then((user, err) => {
        const token = jwt.sign(user.data, process.env.REACT_APP_JWTSECRET);
        localStorage.set("auth jwt", token);
        return axios.get("http://localhost:5000/api/auth/")
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
  render(){
    return (
      <FacebookLogin
        appId="244906609795883"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook} />
    )
  }
}
