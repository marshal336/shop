//Core
import React from 'react'
//icons
import { Button } from '@chakra-ui/react'

const CustomButton = ({ title }: { title: string }) => {
  return (
    <Button colorScheme='red' size='lg'>{title}</Button>
  )
}

export default CustomButton