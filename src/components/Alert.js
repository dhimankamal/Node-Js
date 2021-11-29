import React from 'react'

function Alert(props) {
    return (
        props.alert && <div className={`container alert alert-${props.alert.type} my-2`} role="alert">
         {props.alert.mesg}
      </div>
    )
}

export default Alert
