import React, { Component } from 'react'
import {Button ,Modal, ModalBody, ModalHeader, ModalFooter, Input} from 'reactstrap'
import {createNewChat} from '../../redux/actionCreator'
const initialState = {
    modal: false,
    userIdsSelected: [],
    chatName: '',
    chatDescription: ''
}
export default class CreatChatModal extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    } 
    toggle =() => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    renderUsers = () => {
        const {appState} = this.props
        if (appState.user.connectedUserIds) {
            return appState.user.connectedUserIds.map(userid => {
                const name = appState.user.connectedUsers[userid].username
                return (<Button key={`User ${userid}`} size="sm" onClick={() => this.handleUserClick(userid)}>{name}</Button>)
            })
        }
    }
    renderSelectedUsers = () => {
        if (this.state.userIdsSelected.length >0) {
            return this.state.userIdsSelected.map(userid => {
                const user = this.props.appState.user.connectedUsers[userid]
                if (user) {
                    return <span key={`Selected ${userid}`}>@{user.username}, </span>
                } else return ''
            })

        }
    }
    handleUserClick= (userid) => {
        this.setState(prevState => {
            if (prevState.userIdsSelected.indexOf(userid) === -1) {
                prevState.userIdsSelected.push(userid)
                return {userIdsSelected: prevState.userIdsSelected}
            }
        })
    }
    handleChatNameChange = (event) => {
        this.setState({chatName: event.target.value})
    } 
    handleChatDescriptionChange = (event) => {
        this.setState({chatDescription: event.target.value})
    }
    handleSubmit = () => {
        if (this.state.userIdsSelected.length > 0) {
            const newChat = {
                name: this.state.chatName,
                description: this.state.chatDescription,
                users: this.state.userIdsSelected
            }
            this.props.appState.dispatch(createNewChat(newChat))

        }
        this.setState(initialState)

    }
    render() {
        return (
        <div>
            <Button onClick={this.toggle}>Create New Chat</Button>
            <Modal toggle={this.toggle} isOpen={this.state.modal}>
                <ModalHeader toggle={this.toggle}>
                    Create New Chat
                </ModalHeader>
                <ModalBody>
                    <Input value={this.state.chatName} onChange={this.handleChatNameChange} placeholder="Your chat name (required)"/>
                    <Input value={this.state.chatDescription} onChange={this.handleChatDescriptionChange} type="textarea" placeholder="Chat description"/>
                    <h3>Choose users to talk to: {this.renderSelectedUsers()}</h3>
                    {this.renderUsers()}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.handleSubmit}>Chat now!</Button>
                </ModalFooter>
            </Modal>
        </div>
        )
    }
}
