import React from 'react'
import styled from 'styled-components'

const Score = ({
  score,
}) => {
  return (
    <ScoreContainer>
      <ScoreBox>
        <HeaderTitle>Global stats</HeaderTitle>
        <div>ได้รับคะแนน</div>
        <ScorePoint>{score}</ScorePoint>
      </ScoreBox>
    </ScoreContainer>
  )

}

export default Score

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

const ScorePoint = styled.div`

`