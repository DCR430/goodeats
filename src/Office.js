import React from 'react'

function Office(props){
    return(
        <div>
        <h4>{Office.props.name}</h4>
        <h4>{Office.props.available}</h4>
        <h4>{Office.props.cost}</h4>
         </div>
    )
}