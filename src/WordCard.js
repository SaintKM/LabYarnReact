import React, { useState } from 'react';
import CharacterCard from './CharacterCard.js';
import _ from 'lodash';


const word = ["hello", "equivalent", "balanced", "peace", "graduate", "respect", "optimistic"];
var random = Math.floor(Math.random() * word.length);

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '-',
        definition_word: "Let's guess",
        score: 0,
        completed: false,
        continue: "disable"
    }
}

export default function WordCard(props){
    
    let [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
        //console.log(`${c} has been activated.`)
        //modify first character and set first state
        let guess = ''
        if(state.guess == '-'){
            guess = c
            state.continue = "disable"
            state.completed = false
        }
        else
            guess = state.guess + c
        setState({...state, guess: guess})
        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, definition_word: "Congratulations!", guess: guess, score: state.score + 1, completed: true})
            }else{
                console.log('reset')
                setState({...state, definition_word: "Try Again!", guess: '', attempt: state.attempt + 1, completed: true})
            }
        }
    }

    const nextGame = () => {
        //console.log(state.guess + " | " + state.word)
        if(state.guess == state.word){
            console.log('Next Game!')
            setState({...state, definition_word: "Let's guess", guess: '-', continue: 'enable'})
            //document.getElementById('CharacterCard-id').remove()
            //state = prepareStateFromWord(word[random])
        }
    }

    return (
        <div>
            <div>Attempt : { state.attempt }</div>
            <div>Current Word : { state.guess }</div>
            <div>{ state.definition_word }</div>
            <div>Score : { state.score }</div>
            <div id="cc_p">
            <div id="CharacterCard-id">
                {
                    state.chars.map((c, i) =>
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}
                        continue={state.continue} completed={state.completed}/>
                    )
                }
            </div>
            </div>
            <div className="nextBtn" onClick={nextGame}>NEXT</div>
        </div>
    );
}