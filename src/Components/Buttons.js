import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const Buttons = (props) => {
    const navigate = useNavigate();

    const solveEq=()=>{
      navigate('/solve',{state:props});
    }

    return (
        <div className="flex flex-row justify-end mx-auto">
                {/* {console.log(props)} */}
                <div onClick={()=>{solveEq()}}>
                  <input 
                    type="button"
                    className="btn btn-success mt-5 ms-3"
                    value="Solve"
                  />
                </div>
        </div>
    )
}

export default Buttons
