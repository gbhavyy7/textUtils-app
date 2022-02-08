import React from 'react';

const Alert = (props) => {
    const capitalizeFirstLetter = word =>{
        let lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase()+lowerCase.slice(1);
    }

    return (
        <div style={{height:"50px"}}>
            {props.alert && //first props.alert will be evaluated. If props.alert is null, further part wont be evaluated
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong>{capitalizeFirstLetter(props.alert.type)}:</strong> {props.alert.msg}
            </div>}
        </div>
    );
}
 
export default Alert;