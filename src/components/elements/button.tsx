import { Button } from '@chakra-ui/react'
import React from 'react'

const CustomButton = ({ title }: { title: string }) => {
  return (
    <Button colorScheme='red' size='lg'>{title}</Button>
  )
}

export default CustomButton