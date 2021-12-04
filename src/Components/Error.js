import React from 'react'
import { useNavigate } from 'react-router'

const Error = () => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/');
    }
    return (
        <div className="home text-center white_text error">
            <h1>Entered unsolvable equation</h1>
            <div onClick={()=>{handleClick()}} className="py-4">
                <input
                    type="button"
                    className="btn btn-primary"
                    value="RETURN HOME"
                />
            </div>
        </div>
    )
}

export default Error
