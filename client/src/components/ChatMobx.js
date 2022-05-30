import { observer } from 'mobx-react';
import store from '../stores/ChatStore';
import React, { Component } from 'react';
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';
const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

class ChatState extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            messages,
            thisUserLoggedIn,
            messageText,
            thisUser
        } = store;

        return (
            <div className="main" id='wrapper'>
                <h1>Chat using MobX</h1>
                {thisUserLoggedIn ?
                    <div>
                        <div className="title">
                            <Text id="main-heading" type="secondary" style={{ fontSize: '36px' }}>Websocket Chat: {thisUser}</Text>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50 }} id="messages">
                            {
                                messages.map(message =>
                                    <Card key={message.id} style={{ width: 300, margin: '16px 4px 0 4px', alignSelf: thisUser === message.user ? 'flex-end' : 'flex-start' }} loading={false}>
                                        <Meta
                                            avatar={
                                                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{message.user[0].toUpperCase()}</Avatar>
                                            }
                                            title={message.user+":"}
                                            description={message.msg}
                                        />
                                    </Card>
                                )
                            }
                        </div>
                        <div className="bottom">
                            <Search
                                placeholder="input message and send"
                                enterButton="Send"
                                value={messageText}
                                size="large"
                                onChange={e => store.typeMessage(e.target.value)}
                                onSearch={value => store.sendMessage(value)}
                            />
                        </div>
                    </div>
                    :
                    <div style={{ padding: '200px 40px' }}>
                        <Search
                            placeholder="Enter Username"
                            enterButton="Login"
                            size="large"
                            onSearch={value => store.logInUser(value)}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default observer(ChatState);