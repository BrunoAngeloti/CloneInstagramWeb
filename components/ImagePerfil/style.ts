import Image from 'next/image'

import styled from 'styled-components'

export const ImageRounded = styled(Image)<{ $newStorie?: boolean }>`
  border-radius: 50%;
  border:  ${props => props.$newStorie ? '2px solid #CB2C8A' : '0.5px solid #D4D4D4'}!important;
  padding: 2px !important;
`