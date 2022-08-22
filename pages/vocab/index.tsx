import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components'
import Score from '../../components/Score'
import Quiz from '../../components/Quiz'


const VocabPage = () => {
  const [score, setScore] = useState(0)

  useEffect(() => {
    const oldScore = localStorage.getItem('score')
    if (oldScore) {
      setScore(parseFloat(oldScore))
    }
  }, [])
  const [modalData, setModalData] = useState<{
    active: boolean
    text?: string
    title?: string
  }>({
    active: false,
  })

  return (
    <>
      {modalData.active && 
        <Modal>
          <ModalBox>
            <div>{modalData.title}</div>
            <div>{modalData.text}</div>
            <button onClick={() => setModalData({ active: false })}>Ok</button>
          </ModalBox>
        </Modal>
      }
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Score score={score} />
          <Quiz
            setScore={setScore}
            score={score}
            setModalData={setModalData}
          />
          <Banner>3</Banner>
        </Container>
      </Box>
    </>
  );
}

export default VocabPage

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  position: absolute;
  z-index: 1;
`

const Banner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const ModalBox = styled.div`
  background: white;
  width: 400px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`