import Image from 'next/image'
import { useState } from 'react'

import { ContainerStories, Profile, Button } from './style'

import ImagePerfil from '../ImagePerfil'

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]

const Stories = () => {
  const constantMove = 320
  const constantStoriesOnScreen = 8
  const [move, setMove] = useState(0)
  const [control, setControl] = useState(constantStoriesOnScreen)

  function moveToLeft(){  
    const result = control - constantStoriesOnScreen

    if(result >= 4){
      setMove(move+constantMove)
      setControl(control-4)
    }else{
      const resultSub = ((move+((constantMove/4)*result)) - 30)
      if(resultSub === 0)
        setMove(resultSub)
      else
        setMove(((move+((constantMove/4)*result)) - (30 - resultSub)))
      setControl(control-result)
    }
  }

  function moveToRight(){
    const result = data.length - control 

    if(result >= 4){
      setMove(move-constantMove)
      setControl(control+4)
    }else{
      setMove((move-((constantMove/4)*result)) + 30)         
      setControl(control+result)
    }
  }

  return (
    <ContainerStories>    
      <Button move={move} left onClick={moveToLeft}>
        <Image src="/icons/arrowLeft.svg" width={16} height={16} alt="seta"/>
      </Button>
      {data.map(data => (
        <Profile key={data} move={move}>
          <ImagePerfil />
          <span>brunoangeloti</span>
        </Profile>
      ))}    
      <Button controlMax={data.length - control} right onClick={moveToRight}>
        <Image src="/icons/arrowRight.svg" width={16} height={16} alt="seta"/>
      </Button>
    </ContainerStories>
  )
}

export default Stories