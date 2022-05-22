import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Redo from '@material-ui/icons/Redo'
import MoreVert from '@material-ui/icons/MoreVert'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import KeyboardHide from '@material-ui/icons/KeyboardHide'
import Settings from '@material-ui/icons/Settings'
import React, { useEffect } from 'react'
import './EmailList.css'
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow'
import { useState } from 'react'
import { db } from './firebase'


function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setEmails(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
                )
            )
    }, [])


    return (
        <div className='emailList'>
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected />
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>

            <div className="emailList__list">
                {emails.map(({ id, data: { to, subject, message } }) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date().toLocaleString()}
                    />
                ))}
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                 <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                 <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
                <EmailRow
                    title='Twitch'
                    subject='Hey fellow streamer!!!'
                    description='This is a testThis is a testThis is a test'
                    time='10pm'
                />
            </div>
        </div>
    )
}

export default EmailList