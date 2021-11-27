import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = (props) => {
    return (
        <div className="flex flex-row justify-end mx-auto">
                {console.log(props)}
                <Link to={{pathname:"/solve",state:props}}>
                  <input
                    type="button"
                    className="btn btn-success mt-5 me-5 ms-3"
                    value="Solve"
                    // onClick={()=>history.push({pathname:"/solve",state:text})}
                  />
                </Link>
                <Link to={{pathname:"/vis",state:props}}>
                <input
                  type="button"
                  className="btn btn-primary mt-5"
                  value="Visualize"
                  onClick={()=>history.push({pathname:"/visualize",state:text})}
                />
                </Link>
        </div>
    )
}

export default Buttons
