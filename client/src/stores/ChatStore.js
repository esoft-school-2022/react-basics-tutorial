import {observable, computed, autorun, reaction, get, action} from 'mobx';
import {w3cwebsocket as W3CWebSocket} from "websocket/lib/websocket";

class mainStore {
    constructor() {
    }

    client = new W3CWebSocket('ws://127.0.0.1:8000');

    @observable messages = [];

    @action setMessage(message) {
        this.messages.push(message);
    }

    sendMessage(message) {
        client.send(JSON.stringify({
            type: "message",
            msg: value,
            user: userName
        }));
    }

    @observable userData = {
        name : "",
        patronymic : "",
        user_email : "",
    };

    @observable buttons = {
        sendData : {
            disabled : true,
        }
    };

    /**
     * Схема компонентов на страницах
     * @key - имя страницы
     * @value - массив с последовательным перечислением компонентов (name, type), которые в этом порядке включаются в вёрстку на странице
     */
    componentsMap = {
        userData : [
            ["name", "fio"],
            ["patronymic", "fio"],
            ["surname", "fio"],
            ["user_email", "email"],
            ["send_data", "button"],
        ]
    };

    /**
     * Коллекции компонентов для работы listener'ов различных stores
     */
    @observable listenerBlocks = {};

    /**
     * Заполнение коллекций компонентов
     */
    @action fillBlocks = () => {
        for (let i in this.componentsMap) {
            const pageBlock = this.componentsMap[i];
            // преобразуем в объект типов компонентов (key) с массивами их имён (value)
            const blocks = {};
            pageBlock.forEach((item, i) => {
                const _name = item[0];
                const _type = item[1];
                if (!blocks[_type]) {
                    blocks[_type] = [_name]
                } else {
                    blocks[_type].push(_name)
                }
            })
            this.listenerBlocks[i] = blocks;
        }
    };

    /**
     * Предзаполнение полей ввода
     */
    @action fillData = () => {
        if (optionsStore.preset) {
            // проверки, чтобы избежать undefined, что поломает неконтролируемый компонент
            if (optionsStore.preset.name) {
                this.userData.name = optionsStore.preset.name;
            }
            if (optionsStore.preset.surname) {
                this.userData.surname = optionsStore.preset.surname;
            }
        }
    };

    /**
     * Listener для компонентов страницы
     */
    @computed get dataInput() {
        const mappedResult = {
            fio : {},
            email : {
                user_email : {},
            }
        };

        const { items } = this.FioStore;
        const { params } = this.EmailStore;

        if (items) {
            this.listenerBlocks.userData.fio.forEach((item) => {
                const i = get(items, item);
                if (i) {
                    mappedResult.fio[item] = {
                        isCorrect : i.isCorrect,
                        value : i.value,
                    }
                }
            })
        }

        if (params) {
            mappedResult.email.user_email = {
                isCorrect : params.isCorrect,
                prevalidated : params.prevalidated,
                value : params.value,
            }
        }

        return mappedResult
    }


    /**
     * Listener нажатия кнопки отправления данных
     */
    @computed get sendDataButton() {
        let result = {};
        const i = get(this.ButtonStore.items, "send_data");
        if (i) {
            result = {
                isClicked : i.isClicked,
            }
        }
        return result
    }

}

export default new mainStore();