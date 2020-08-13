import React, { useState, useEffect, useRef } from 'react';
export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const attemptRef = useRef(props.attempt);
    const scoreRef = useRef(props.score);
    const completeRef = useRef(props.completed);
    const continueRef = useRef(props.continue);
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
        //console.log(continueRef.current + " : " + props.continue + " | " + completeRef.current + " : " + props.completed)
        if(props.continue == "enable" && props.completed == true){
            setActive(false)
        }
    })

    const className = `card ${active ? 'activeCard': ''}`
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
}