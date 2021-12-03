import React from 'react'

const Answer = ({arr}) => {
    return (
        <div>
            {arr.map(s=>{
                s.map(final=>{
                    {/* return <p>x={final.img.alt}</p> */}
                    <p>Heelo</p>
                })
            })}
        </div>
    )
}

export default Answer
