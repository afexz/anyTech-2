import React, {Fragment} from 'react'
import CommonCounter from './CommonCounter'


const counterContent =[
    {
        num:'20',
        desc:'We Develop Over 20 Software',
    },
    {
        num:'8',
        desc:'Global Clients & Trusted Us',
    },
    {
        num:'30',
        desc:'Clients Reviews Our Software',
    },
]

const CounterTwo = () => {
    return (
        <Fragment>
            <ul className="list-none count-list">
                {counterContent.map((val,i)=>(
                    <li key={i}>
                        <div className="counter-style-two boder-style d-xxl-flex align-items-center mb-30">
                            <h3><span className="counter"><CommonCounter value={val.num} /></span>+</h3>   
                            <p className="text-white">{val.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default CounterTwo