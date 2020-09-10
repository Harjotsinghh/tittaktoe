import  React from 'react'

export default function Square(props)
{
    return(
        <button className="btn" onClick={props.clicked}>
        {props.value}
        </button>
    )
}