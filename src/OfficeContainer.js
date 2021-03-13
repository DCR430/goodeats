import React from 'react'
import './OfficeContainer.css'
import api from './Api.js'

function OfficeContainer(){
    
    const singleOffice = api.map(single => <Office/>)

    return(
        <div className="office_Container">
            <h1>Offices</h1>
        </div>

        
    )
}
export default OfficeContainer