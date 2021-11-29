import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'   
import "../index.css" 

const Solve = (props) => {

    const location = useLocation();
    
    var reqEquation=location.state.equation
    var len=reqEquation.length
    var eq=""

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

    const [solution, setsolution] = useState();

    useEffect(()=>{
    const url="https://api.wolframalpha.com/v2/query?input="+eq+"&output=json&appid=77QY3U-QR78VRQUR7";
        console.log(eq);
        console.log(url);
        fetch(url)
        .then(resp=>setsolution(resp))
        .catch(err => {
            throw new Error(err)
        })
    },[])

    return (
        <div className="solution">
            {console.log(solution)}
            <div>{eq}</div>
        </div>
    )
}

export default Solve
