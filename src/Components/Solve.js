import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'   
import "../index.css" 
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'


const Solve = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    var reqEquation=location.state.equation
    var len=reqEquation.length
    var eq=""
    // const arr= [];
    
    console.log(reqEquation);
    console.log(len);

    for(var i=0;i<reqEquation.length-1;i=i+1){
        eq=eq+reqEquation[i];
    }

    for (var char=0;char<len;char++){
        if(eq[char] == 'O')
            eq=eq.replace(eq[char],'0')
        if(eq[char] == '+'){
            eq=eq.replace(eq[char],'%20plus%20')
            len=len+9
        }
        if(eq[char] == '-'){
            eq=eq.replace(eq[char],'%20minus%20')
            len=len+10
        }
    }
    
    const visEq=()=>{
        navigate('/vis',{state:location.state});
      }
  
    const [solution, setSolution] = useState();
    const [waiting, setWaiting] = useState(0);
    const url="https://api.wolframalpha.com/v2/query?input="+eq+"&output=json&appid=77QY3U-QR78VRQUR7";
    console.log(url);
    setTimeout(()=>setWaiting(1),5000)
    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/"+url)
            .then(response => setSolution(response))
    }, []);

    return (
        (waiting)?(
        <div className="solution home">
            {console.log(solution)}
            <div className="box">
                <h1>Solution: </h1>
                <h6>Entered equation: {reqEquation}</h6>
                <br />
                {console.log(solution.data.queryresult.pods[4].subpods[0].img.alt)}
                <h6>Answer : </h6>
                {/* {arr.push(solution.data.queryresult.pods[4].subpods)}
                {console.log(arr)}
                {arr.map(sol => (
                    <p>{sol.img.alt}</p>
                ))} */}
                <p>{solution.data.queryresult.pods[4].subpods[0].img.alt}</p>
                <div onClick={()=>{visEq()}}>
                <input
                  type="button"
                  className="btn btn-primary mt-4 ms-1"
                  value="Visualize"
                />
                </div>
            </div>
        </div>
    ):(<>
        <h1 className="waiting-text">Waiting for Api response</h1>
        <div className="loader"></div>
        </>)
    )
}

export default Solve
