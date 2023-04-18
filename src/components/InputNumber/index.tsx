import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import * as S from './styles'

interface InputNumberProps {
  label: string
  onChange: (value) => any
}

function InputNumber({ label, onChange }: InputNumberProps) {
  const {
    value,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps
  } = useNumberInput({
    step: 1,
    defaultValue: 0,
    min: 0,
    max: 10
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps({ readOnly: true })

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <S.Container>
      <p>{label}</p>
      <HStack maxW="150px">
        <Button {...inc}>+</Button>
        <Input {...input} />
        <Button {...dec}>-</Button>
      </HStack>
    </S.Container>
  )
}

export default InputNumber
