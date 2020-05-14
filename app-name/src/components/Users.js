import React from 'react'

export default function Users(props) {
    return (
        <div>
            {props.sers.map(obj =>
              <div>
                   <h2>{obj.name}</h2> 
                   <p>{obj.email}</p>
                   <p>{obj.password}</p>
              </div>  
              )}
        </div>
    )
}
