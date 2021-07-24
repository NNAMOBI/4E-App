// message component
import React from 'react'

// error message handler
const getMessageStyle =(props)=> {
  let baseClass = "alert";
  if(props.message.msgError)
      baseClass = baseClass + "alert-danger";
  else
      baseClass = baseClass + "alert-success";
return baseClass + " text-center ";
}


//message component to handle message from the backend
const Message = (props) => {
    return (
        <div className={getMessageStyle(props)} role="alert">
            {props.message.msgBody}
        </div>
    )
}

export default Message
