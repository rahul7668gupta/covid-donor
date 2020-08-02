import React, { useState } from 'react';
import {css, cx} from 'emotion';

export const Quote = () => {

    const Testdata = {
        0: {
            name: "Ahmad Ayyad",
            msg: "Every day, I’m getting better and better...I’m slowly getting my weight back. I’m eating a lot; I’m taking walks outside. Thanks to the person donating plasma to me."
        },
        1: {
            name: "Sammy Eldin",
            msg: "I had a volunteer donate plasma for me. I can’t tell you how nice and friendly the volunteer was."
        },
        2: {
            name: "George Stephens",
            msg: "Once I met Mr. Nitesh Bharti, I knew he would donate for me. Thank You Mr. Nitesh."
        }
    }

    const [current, setCurrent] = useState(Testdata[0]);
    const [active, setActive] = useState(0);

    const handleSetClick = (event) =>{
        setCurrent(Testdata[event.target.getAttribute("data-Testdata")]);
        setActive(event.target.getAttribute("data-Testdata"));
    }

    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            background: grey;

            p{
                text-align: center;
                margin-top: 10px;
                margin-bottom: 20px;
                color: white;
            }
        `}> 
            <p>{current.msg}</p>
            <h2>{current.name}</h2>
            <div className={css`
                display: flex;
                span{
                    height: 20px;
                    width: 20px;
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                span::before{
                    content: "";
                    height: 6px;
                    width: 6px;
                    background-color: #d4d4d4;
                    border-radius: 50%;
                    transition: background-color 0.3s ease-out;
                }
                span:hover::before{
                    background-color: #45454d;                   
                }
                span[data-Testdata="${active}"]::before{
                    background-color: #45454d;
                }

            `}>
                {Object.keys(Testdata).map((i, index) => 
                    <span 
                        onClick={ event => handleSetClick(event)}
                        data-Testdata={i}
                        key={index}
                    />
                )}
            </div>
        </div>
    )
}