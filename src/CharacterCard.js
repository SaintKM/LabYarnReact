import React, { useState, useEffect, useRef } from 'react';
export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const attemptRef = useRef(props.attempt);
    const scoreRef = useRef(props.score);
    const completeRef = useRef(props.completed);
    const activate = () => {
        if(!active){
            setActive(true)
            props.activationHandler(props.value)
        }
    }

    useEffect(() => {
        if(attemptRef.current != props.attempt){
            setActive(false)
            attemptRef.current = props.attempt
        }
        /*if(scoreRef.current != props.score){
            setActive(false)
            scoreRef.current = props.score
        }*/
        if(completeRef.current != props.completed){
            setActive(false)
            completeRef.current = props.completed
        }
    })

    const className = `card ${active ? 'activeCard': ''}`
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
}