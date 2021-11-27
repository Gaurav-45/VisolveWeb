import React from 'react'
import Tesseract from 'tesseract.js';
import { Link, useHistory } from "react-router-dom";
import '../App.css'

const Scan = () => {

    // const history=useHistory();
    const [isLoading, setIsLoading] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [text, setText] = React.useState('');
    const [progress, setProgress] = React.useState(0);
  
    const handleSubmit = () => {
      setIsLoading(true);
      Tesseract.recognize(image, 'eng', {
        logger: (m) => {
          console.log(m);
          if (m.status === 'recognizing text') {
            setProgress(parseInt(m.progress * 100));
          }
        },
      })
        .catch((err) => {
          console.error(err);
        })
        .then((result) => {
          console.log(result.data);
          setText(result.data.text);
          setIsLoading(false);
        });
    };

    return (
    <div className="container" style={{ height: '100vh' }}>
      <div className="row h-100">
        <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
          {!isLoading && (
            <h1 className="text-center py-3 mc-5 ">Visolve</h1>
          )}
          {isLoading && (
            <>
              <progress className="form-control" value={progress} max="100">
                {progress}%{' '}
              </progress>{' '}
              <p className="text-center py-0 my-0">Converting:- {progress} %</p>
            </>
          )}
          {!isLoading && !text && (
            <> 
              <input
                type="file"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                className="form-control mt-5 mb-2"
              />
              <input
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary mt-5"
                value="Solve"
              />
            </>
          )}
          {!isLoading && text && (
            <>
              <h6 className="text-center">Please confirm the equation</h6>
              <textarea
                className="form-control w-100 mt-5"
                rows="5"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <div className="flex flex-row justify-end mx-auto">

              <Link to={{pathname:"/solve",state:text}}>
                  <input
                    type="button"
                    className="btn btn-success mt-5 me-5 ms-3"
                    value="Solve"
                    // onClick={()=>history.push({pathname:"/solve",state:text})}
                  />
                </Link>
                <input
                  type="button"
                  className="btn btn-primary mt-5"
                  value="Visualize"
                  onClick={()=>history.push({pathname:"/visualize",state:text})}
                />
              </div>
              
            </>
          )}
        </div>
      </div>
    </div>
    )
}

export default Scan
