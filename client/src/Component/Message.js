// message component
import React from 'react'

// error message handler
//code from MERN stack part 8: Creating our Todo component and Todo service, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=NN310xEV1G8
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
//MERN stack part 8: Creating our Todo component and Todo service, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=NN310xEV1G8
export default Message
