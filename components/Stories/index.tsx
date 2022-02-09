import Image from 'next/image'
import { useState } from 'react'

import { ContainerStories, Profile, Button } from './style'

import ImagePerfil from '../ImagePerfil'

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

const Stories = () => {
  const constantMove = 320
  const constantPerImage = 80
  const [move, setMove] = useState(0)

  function moveToLeft(){  
    if(move + constantMove <= 0)
      setMove(move+constantMove)
    else
      setMove(move-move)
  }

  function moveToRight(){
    const result = constantPerImage * (data.length - 4)
    const resultSub = result - constantMove + move

    if(resultSub >= constantMove)
      setMove(move-constantMove)
    else
      setMove(move-resultSub-50)
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
      <Button controlMax={((data.length-8)*constantPerImage) + 50 + move} right onClick={moveToRight}>
        <Image src="/icons/arrowRight.svg" width={16} height={16} alt="seta"/>
      </Button>
    </ContainerStories>
  )
}

export default Stories