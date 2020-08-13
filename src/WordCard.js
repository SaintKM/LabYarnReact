import React, { useState } from 'react';
import CharacterCard from './CharacterCard.js';
import _ from 'lodash';
 
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        definition_word: "Let's guess",
        score: 0,
        completed: false
    }
}

export default function WordCard(props){
    
    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = (c) => {
        //console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({...state, guess})
        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, definition_word: "Congratulations!", score: state.score + 1, completed: true})
            }else{
                console.log('reset')
                state.definition_word = "Nice try!"
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }  

    return (
        <div>
            <div>Attempt : { state.attempt }</div>
            <div>Current Word : { state.guess }</div>
            <div>{ state.definition_word }</div>
            <div>Score : { state.score }</div>
            <div>
                {
                    state.chars.map((c, i) =>
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                    )
                }
            </div>
        </div>
    );
}