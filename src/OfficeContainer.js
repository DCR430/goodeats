import React from 'react'
import './OfficeContainer.css'
import api from './Api.js'
import Office from './Office.js'

function OfficeContainer(){
    
    let singleOffice = api.map((single) => <Office key={single.id} singleOffice={single}/>)

    return(
        <div className="office_Container">
            <h1>Offices</h1>
            <div className="single_office">
            {singleOffice}

            </div>
        </div>

        
    )
}
export default OfficeContainer