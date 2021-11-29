import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const Buttons = (props) => {
    const navigate = useNavigate();

    const solveEq=()=>{
      navigate('/solve',{state:props});
    }

    const visEq=()=>{
      navigate('/vis',{state:props});
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
                <div onClick={()=>{visEq()}}>
                <input
                  type="button"
                  className="btn btn-primary mt-4 ms-1"
                  value="Visualize"
                />
                </div>
        </div>
    )
}

export default Buttons
