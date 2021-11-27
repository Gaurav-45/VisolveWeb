import React from 'react'
import functionPlot from "function-plot";

let contentsBounds = document.body.getBoundingClientRect();
let width = 800;
let height = 500;
let ratio = contentsBounds.width / width;
width *= ratio;
height *= ratio;


const Graph = () => {
    
    functionPlot({
        target: '#closed',
        xAxis: {domain: [-2, 12]},
        data: [{
          fn: '3 + sin(x)',
          range: [2, 8],
          closed: true
        }]
      })
    return (
        <div>
            {functionPlot}
        </div>
    )
}

export default Graph
