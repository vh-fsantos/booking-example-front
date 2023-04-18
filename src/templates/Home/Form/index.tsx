import {
  Button,
  ButtonGroup,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'

import InputNumber from 'components/InputNumber'

import React, { useState } from 'react'

import * as S from './styles'

interface FormProps {
  setIsOpen: (e) => any
  onSubmit: (e) => any
  isOpen: boolean
}

export default function Form({ setIsOpen, onSubmit, isOpen }: FormProps) {
  const [kitchen, setKitchen] = useState(0)
  const [bathroom, setBathroom] = useState(0)
  const [bedroom, setBedroom] = useState(0)
  const [livingRoom, setLivingRoom] = useState(0)
  const [name, setName] = useState('')

  const clearFields = () => {
    setKitchen(0)
    setBathroom(0)
    setBedroom(0)
    setLivingRoom(0)
    setName('')
  }

  const handleSubmit = async () => {
    const units = []

    units.push(...Array(Number(kitchen)).fill('kitchen'))
    units.push(...Array(Number(bathroom)).fill('bathroom'))
    units.push(...Array(Number(bedroom)).fill('bedroom'))
    units.push(...Array(Number(livingRoom)).fill('living-room'))

    onSubmit({
      name,
      units
    })

    clearFields()
  }

  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new property</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Name</Text>
            <Input
              placeholder="Insert the name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <S.PlaceWrapper>
              <div className="place">
                <InputNumber label="Kitchen" onChange={setKitchen} />
              </div>
              <div className="place">
                <InputNumber label="Bathroom" onChange={setBathroom} />
              </div>
              <div className="place">
                <InputNumber label="Bedroom" onChange={setBedroom} />
              </div>
              <div className="place">
                <InputNumber label="Living Room" onChange={setLivingRoom} />
              </div>
            </S.PlaceWrapper>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup variant="outline" spacing="2">
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button colorScheme="blue" onClick={() => handleSubmit()}>
                Save
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
