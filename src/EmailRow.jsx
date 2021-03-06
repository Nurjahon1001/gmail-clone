import { Checkbox, IconButton, Popover } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './EmailRow.css'
import { useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import {selectMail} from './features/counter/mailSlice'

function EmailRow({ title, subject, description, time, id }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        }))

        navigate('/mail')
    }

    
    return (
        <>
            <div onClick={openMail} className='emailRow'>
                <div className="emailRow__options">
                    <Checkbox />
                    <IconButton>
                        <StarBorderOutlined />
                    </IconButton>
                    <IconButton>
                        <LabelImportantOutlined />
                    </IconButton>
                <h3 className="emailRow__title">
                    {title}
                </h3>
                </div>
                <div className="emailRow__message">
                    <h4>{subject}{" "}
                        <span className="emailRow__description">{description}</span>
                    </h4>
                </div>
                <div className="emailRow__time">{time}</div>
            </div>
        </>
    )
}

export default EmailRow