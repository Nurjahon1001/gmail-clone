import { Checkbox, IconButton, Popover } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './EmailRow.css'
import { useNavigate} from "react-router-dom"

function EmailRow({ title, subject, description, time, id }) {
    const navigate = useNavigate()
    
    return (
        <>
            <div onClick={() => navigate("/mail")} className='emailRow'>
                <div className="emailRow__options">
                    <Checkbox />
                    <IconButton>
                        <StarBorderOutlined />
                    </IconButton>
                    <IconButton>
                        <LabelImportantOutlined />
                    </IconButton>
                </div>
                <h3 className="emailRow__title">
                    {title}
                </h3>
                <div className="emailRow__message">
                    <h4>{subject}{" "}
                        <span className="emailRow__description">{description}</span>
                    </h4>
                </div>
                <div className="emailRow__time">{time}</div>

            </div>
            <div className='emailRow'>
                <div className="emailRow__options">
                    <Checkbox />
                    <IconButton>
                        <StarBorderOutlined />
                    </IconButton>
                    <IconButton>
                        <LabelImportantOutlined />
                    </IconButton>
                </div>
                <h3 className="emailRow__title">
                    {title}
                </h3>
                <div className="emailRow__message">
                    <h4>{subject}
                        <span className="emailRow__description">{description}</span>
                    </h4>
                </div>
                <p className="emailRow__time">
                    {time}
                </p>

            </div>
        </>
    )
}

export default EmailRow