import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'   
import "../index.css" 
import axios from 'axios'


const Solve = (props) => {

    const location = useLocation();
    
    var reqEquation=location.state.equation
    var len=reqEquation.length
    var eq=""
    var ans=0
    
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

    const [solution, setSolution] = useState();
    const url="https://api.wolframalpha.com/v2/query?input="+eq+"&output=json&appid=77QY3U-QR78VRQUR7";
    console.log(url);
    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/"+url)
            .then(response => setSolution(response));
        
    }, []);

    return (
        <div className="solution home">
            {console.log(solution)}
            <div className="box">
                <h1>Solution: </h1>
                <h6>Entered equation: {reqEquation}</h6>
                <br />
                {/* x=1/2 */}
                {setTimeout(()=>{console.log("waiting");},5000)}
                {console.log(solution.data.queryresult.pods[4].subpods[0].img.alt)}
                {/* <p>{ans}</p> */}
                {/* queryresult.pods[4].subpods[0].img */}
            </div>
        </div>
    )
}

export default Solve
