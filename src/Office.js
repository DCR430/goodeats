import React from 'react'
import './Office.css'

function Office(props){
    return(
        <div className="singleOffice">
        <h4>Name:{props.singleOffice.name}</h4>
        <h4>Reserved:{props.singleOffice.reserved}</h4>
        <h4>Cost:{props.singleOffice.cost} credits</h4>
         </div>
    )
}

export default Office