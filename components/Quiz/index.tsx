import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import quizWords, { QuizWordsProps } from '../../constants/masterdata'
import request from '../../services/request'

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const Quiz = ({
  score,
  setScore,
  setModalData,
}) => {
  const [quizOption, setQuizOption] = useState<QuizWordsProps>({
    word: '',
    answer: '',
    deciets: ['']
  })
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quizWords.length)
    setQuizOption(
      quizWords[randomIndex]
    )
  }, [score])

  let datetime = ''

  useEffect(() => {
    const callApi = async() => {
      const api = await request({
        method: 'GET',
        path: 'https://worldtimeapi.org/api/timezone/Asia/Bangkok',
        // TODO: Stuck on CORS origin please change the api path
      })
    
      datetime = api.data.datetime
    }
    callApi()
  })

  const handleClickCard = (item, answer) => {
    if (item === answer) {
      const newScore = score + 1
      setScore(newScore)
      localStorage.setItem('score', newScore)
    }
  }

  return (
    <ScoreContainer>
      <ScoreBox>
        <HeaderTitle>{quizOption.word} means:</HeaderTitle>
        {
          shuffle([...quizOption.deciets, quizOption.answer]).map((item, index) => {
            return (
              <Button
                key={`${item}-${index}`}
                onClick={() => {
                  // setSelectedValue(item)
                  setModalData({
                    active: true,
                    title: item === quizOption.answer ? 'ถูก' : 'ผิด',
                    text: `${item !== quizOption.answer ? `answer is ${quizOption.answer}` : ''} - ${datetime}`,
                  })
                  handleClickCard(item, quizOption.answer)}
                }
              >{item}</Button>
            )
          })
        }
      </ScoreBox>
    </ScoreContainer>
  )

}

export default Quiz

const ScoreContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const ScoreBox = styled.div`
  background: blue;
  color: white;
  width: 200px;
  height: 100px;
  padding: 10px;
`

const HeaderTitle = styled.span`
  font-size: 20px;
`

const Button = styled.button`
  width: 200px;
`

