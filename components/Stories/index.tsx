import Image from 'next/image'
import { useState } from 'react'

import { ContainerStories, Profile, Button } from './style'

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]

const Stories = () => {
  const constantMove = 305
  const constantStoriesOnScreen = 8
  const [move, setMove] = useState(0)
  const [control, setControl] = useState(constantStoriesOnScreen)

  function moveToLeft(){  
    const result = control - constantStoriesOnScreen

    if(result >= 4){
      setMove(move+constantMove)
      setControl(control-4)
    }else{
      setMove(move+((constantMove/4)*result))
      setControl(control-result)
    }
  }

  function moveToRight(){
    const result = data.length - control 

    if(result >= 4){
      setMove(move-constantMove)
      setControl(control+4)
    }else{
      setMove(move-((constantMove/4)*result))         
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
          <Image src="/imagePerfil.jpg" width={56} height={56} alt="imagem do perfil"/>
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