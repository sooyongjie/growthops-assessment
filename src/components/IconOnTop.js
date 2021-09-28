import React from 'react'
import TiltedSquare from '../img/tilted-square.svg'
import TiltedSquareDark from '../img/tilted-square-dark.svg'
export default function IconOnTop(props) {
    return (
        <div className="icon-on-top">
            <img src={props.theme == "dark" ?  TiltedSquareDark : TiltedSquare } alt="" />
            <i class={props.icon}></i>
        </div >
    )
}
