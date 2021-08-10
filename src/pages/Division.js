import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./styles.css";

export default function Division() {
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [i, setI] = useState(0);
    const [grade, setGrade] = useState(0)
    const [correct, setCorrect] = useState(false);
    const [started, setStarted] = useState(false);
    const [ascreen, setAscreen] = useState(true);
    const [question, setQuestion] = useState();

    function create() {
        var first = Math.floor(Math.random() * 10);
        var second = Math.floor(Math.random() * 10);
        
        if (grade === "kinder" || grade === "first") {
            first = Math.floor(Math.random() * 5);
            second = Math.floor(Math.random() * 5);
        }
        else if (grade === "second" || grade === "third") {
            first = Math.floor(Math.random() * 10);
            second = Math.floor(Math.random() * 10);
        }
        else if (grade === "fourth" || grade === "fifth") {
            first = Math.floor(Math.random() * 100);
            second = Math.floor(Math.random() * 10);
        }

        if (second == 0) {second++};
        var questionText = "What is " + first * second + " / " + second + " equal to?";
        return [questionText, first, second];
    }

    const startQuiz = param => {
        setGrade(param);
        setQuestion(create());
        setStarted(true);
    }


    const handleSubmit = () => {
        setStarted(true);
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
            setQuestion(create());
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="container">
            {!started &&
                <div className='start-page'>
                    Welcome to the Division quiz! There will be 10 questions in this section.
                    <br />
                    Select grade level to begin:
                    <br />
                    <div className='grade-select'>
                        <div className="grade-button" onClick={() => startQuiz('kinder')}>Kindergarten</div>
                        <div className="grade-button" onClick={() => startQuiz('first')}>First</div>
                        <div className="grade-button" onClick={() => startQuiz('second')}>Second</div>
                        <div className="grade-button" onClick={() => startQuiz('third')}>Third</div>
                        <div className="grade-button" onClick={() => startQuiz('fourth')}>Fourth</div>
                        <div className="grade-button" onClick={() => startQuiz('fifth')}>Fifth</div>
                    </div>
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
            {showScore &&
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