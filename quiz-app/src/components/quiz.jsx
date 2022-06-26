import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../App.jsx';
import QuestionsData from '../data/QuestionsData.js';
import QuestionData  from '../data/QuestionsData.js'
const Quiz = () =>{
    const [current,setCurrent] = useState(0);
    const [selectChoice,setSelectChoice] = useState('');

    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer();
    },[selectChoice])

    const checkAnswer = () => {
        if(selectChoice!==''){
            if(selectChoice===QuestionData[current].answer) {
                setScore(score+1);
            } else {
                console.log('Incorrect');
            }
            nextQuestion();
        }
    }
    
    const nextQuestion = () =>{
        setSelectChoice('');
        if(current===QuestionData.length-1){
            setAppState('score');
        } else {
            setCurrent(current+1);
        }
    }
    

    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choice">
                <button onClick={()=>setSelectChoice('A')} >{QuestionData[current].A}</button>
                <button onClick={()=>setSelectChoice('B')} >{QuestionData[current].B}</button>
                <button onClick={()=>setSelectChoice('C')} >{QuestionData[current].C}</button>
                <button onClick={()=>setSelectChoice('D')} >{QuestionData[current].D}</button>
            </div>
            <p>{`${current+1}/${QuestionData.length}`}</p>
        </div>
    )
}
export default Quiz;