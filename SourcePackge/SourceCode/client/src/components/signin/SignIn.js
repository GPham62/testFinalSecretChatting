import React, { Component } from 'react'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login'

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
      facebookProvider:{
        type:{
          id: response.id,
          token: response.accessToken
        }
      }
    })
      .then((user, err) => {
        return axios.get('http://localhost:5000/api/auth')
      })
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
