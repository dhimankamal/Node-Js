import React from 'react'

function Alert(props) {
    return (
        <div className="my-2" style={{height:'60px',}}>
          
        {props.alert && <div className={`container alert alert-${props.alert.type}`} role="alert">
         {props.alert.mesg}
      </div>}
      </div>
    )
}

export default Alert
