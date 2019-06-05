import React, { Component } from 'react';
import "../style/UserBubble.css"


class UserBubble extends Component {

    openUserChat = () => {

    }

    render() {
        let user = this.props.user
        return (
            <div className="userBubble" onClick={this.openUserChat}>
                <img src={user.pic} className={user.email === this.props.currentUser ? "selected-image" : ""} />
                <div className="userName">{user.name}</div>
            </div>
        );
    }
}

export default UserBubble;