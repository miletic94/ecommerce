import React from 'react'

export default function MessageBox(props) {
    return (
        <div className="messageBox">
            {props.children}
        </div>
    )
}
