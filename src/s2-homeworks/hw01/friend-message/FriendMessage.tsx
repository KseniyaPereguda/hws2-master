import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType, UserType} from '../HW1';
import {MessagePropsType} from '../message/Message';

// создать тип вместо any и отобразить приходящие данные

export type FriendsMessageType = {
    message: MessageType
}
const FriendMessage = (props: FriendsMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user.name}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}
                        .
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {props.message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
