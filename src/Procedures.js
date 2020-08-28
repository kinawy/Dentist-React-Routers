import React from 'react';

const Procedures = (props) => {
    let listPros = props.procedures.map((pros, i) => {
       return <p key={i}>{pros}</p>
    })

    return(
        <div>
            <h1>Procedures</h1>
            {listPros}
        </div>
    )
}

export default Procedures