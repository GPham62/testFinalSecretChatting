import React, { Component } from 'react'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login'
import jwt from 'jsonwebtoken'
import localStorage from 'local-storage'

import {addNewUser, authenticateFacebook} from '../../redux/actionCreator'

// import '../../css/signin.css'
export default class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  responseFacebook = (data) => {
    console.log(data);
    // const sentData = {
    //   username: data.name,
    //   email: data.email,
    //   avatar: data.picture.data.url,
    //   facebookProvider:{
    //     type:{
    //       id: data.id,
    //       token: data.accessToken
    //     }
    //   }
    // }

    // axios.post(`${this.props.apiUrl}/api/auth/facebook?access_token=${data.accessToken}`,)
    //   .then((user, err) => {
    //     const token = jwt.sign(user.data, process.env.REACT_APP_JWTSECRET);
    //     localStorage.set("auth jwt", token);
    //     this.props.appState.dispatch(addNewUser(user.data.data))
    //     return axios.get(`${this.props.apiUrl}/api/auth/`)
    //   })
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err));
    this.props.appState.dispatch(authenticateFacebook(data.accessToken))
  }
  render(){
    return (
      <FacebookLogin
        appId="244906609795883"
        autoLoad={false}
        fields="name,email,picture"
        callback={this.responseFacebook} />
    )
  }
}
