import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./styles.css";

export default function Division() {
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [i, setI] = useState(0);
    const [correct, setCorrect] = useState(false)
    const [started, setStarted] = useState(false)
    const [ascreen, setAscreen] = useState(true)
    var question = [];

    function create() {
        var first = Math.floor(Math.random() * 100);
        var second = Math.floor(Math.random() * 10);
        var questionText = "What is " + first * second + " / " + second + " equal to?";
        question = [questionText, first, second];
        return question;
    }
    question = create();

    const startQuiz = () => {
        setStarted(true);
        question = create();
    }

    const handleSubmit = () => {
        var answer = document.getElementById('answer').value;
        if (answer == '') {
            alert("Please answer the question!");
            return;
        }
        document.getElementById('answer').value = '';
        if (question[1] * question[2] / question[2] == answer) {
            setScore(score + 1);
            setCorrect(true);
        }
        else {
            setCorrect(false);
        }

        setAscreen(true);

        if (i < 9) {
            setI(i + 1);
            question = create();
        } else {
            setShowScore(true);
        }
    };


    return (
        <div>
            {!started &&
                <div className='start-page'>
                    Welcome to the Division quiz! There will be 10 questions in this section.
                    <div className="line"></div>
                    <button onClick={() => startQuiz()}>Start</button>
                </div>}
            {!showScore && started && ascreen &&
                <div className='question-section'>
                    <div className='question-count'>
                        Question {i + 1}/10
                    </div>
                    <div className='answer-section'>
                        <div className='question-text'>{question[0]}</div>
                        <input type="text" id="answer" autocomplete="off" />
                        <br></br>
                        <button onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            }
            {!showScore && started && ascreen &&
                <div>
                    {correct && i > 0 &&
                        <p>Correct</p>}
                    {!correct && i > 0 &&
                        <p>Incorrect</p>}
                </div>}
            {showScore && started &&
                <div className='score-section' >
                    You scored {score} out of {10}
                    <div className="line"></div>
                    <Link to="/division" >
                        <div className="restart" onClick="window.location.href=window.location.href">Take the quiz again!</div>
                    </Link>
                </div >
            }
        </div>
    );
}