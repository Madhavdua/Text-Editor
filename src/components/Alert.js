import React from 'react'

function Alert(props) {
    const capatalize=(word)=>{
        word=word.toLowerCase();
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
  return (
    <>
    <div style={{height:'45px'}}>
    {props.alert && <div >
    <div className={`alert alert-${props.alert.type} pt-1`} role="alert" style={{height:'40px'}}>
        <strong>{capatalize(props.alert.type)} </strong>
         : {props.alert.message}
    </div>
    </div>}

    </div>
    </>
  )
}

export default Alert