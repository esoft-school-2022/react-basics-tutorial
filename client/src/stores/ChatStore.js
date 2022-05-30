import {
    action,
    computed,
    decorate,
    observable
} from 'mobx';
import { getUniqueID } from '../utils/utils';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

class ChatStore {
    client = null;
    thisUser = '';
    thisUserLoggedIn = false;
    messageText = '';
    messages = [];

    constructor() {
        this.client = new W3CWebSocket('ws://127.0.0.1:8000');

        this.client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            this.setMessages(dataFromServer);
        };
    }

    logInUser(userName) {
        this.thisUser = userName;
        this.thisUserLoggedIn = true;
    }

    typeMessage(message) {
        this.messageText = message;
    }

    clearInput = () => {
        this.messageText = '';
    }

    setMessages = (message) => {
        this.messages.push({
            id: getUniqueID,
            user: message.user,
            msg: message.msg
        })
    }

    sendMessage() {
        this.client.send(JSON.stringify({
            type: 'message',
            msg: this.messageText,
            user: this.thisUser
        }));

        this.clearInput();
    }

    get allMessages() {
        return this.messages;
    }
}

ChatStore = decorate(ChatStore, {
    thisUserLoggedIn: observable,
    thisUser: observable,
    messages: observable,
    typeMessage: action,
    messageText: observable,
    setMessages: action
});

export default new ChatStore();
