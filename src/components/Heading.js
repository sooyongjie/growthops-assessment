import React from 'react'
import squares from '../img/tri-square.svg'

export default function Heading(props) {
    Heading.defaultProps = {
        type: "1,2",
        text: "Default Text",
        highlight: "BEEP BOOP"
    }
    return (
        <div className="heading">
            <div className="title">
                <div className="lines">
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <img src={squares} alt="" />
                {
                    props.type == '1,2'
                        ? <h2>{props.text}<span>{props.highlight}</span></h2>
                        : <h2><span>{props.highlight}</span>{props.text}</h2>
                }
                <img src={squares} alt="" />
                <div className="lines">
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
            {props.subtitle != null ? <p className="subtitle">{props.subtitle}</p> : null}
        </div>
    )
}
