import React, { useState, useEffect } from 'react'
import api from 'services/api'

import { Button } from '@chakra-ui/react'
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'

import { toast } from 'react-toastify'

import * as S from './styles'

import Form from './Form'

import Dialog from 'components/Dialog'

export default function Home() {
  const [properties, setProperties] = useState([])

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [propertyToDelete, setPropertyToDelete] = useState()

  const fetchData = async () => {
    const {
      data: { properties }
    } = await api.get('/properties')

    const formatedProperties = properties.map((property) => {
      const units = property.units.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1
        return { ...acc }
      }, [])

      return { ...property, units }
    })

    setProperties(formatedProperties)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = async (values) => {
    try {
      await api.post('/properties', values)
      toast.success('Property created successfully.')
      fetchData()
      setIsCreateModalOpen(false)
    } catch (error) {
      toast.error('API Error.')
    }
  }

  const handleDelete = async () => {
    try {
      await api.delete(`properties/${propertyToDelete}`)
      setProperties(properties.filter((prop) => prop._id !== propertyToDelete))
      toast.success('Property deleted successfully.')
      setIsModalOpen(false)
    } catch (error) {
      toast.error('API Error.')
    }
  }

  const handleModal = (id) => {
    setIsModalOpen(true)
    setPropertyToDelete(id)
  }

  return (
    <S.Container>
      <Button
        className="addProperty"
        colorScheme="green"
        variant="solid"
        size="lg"
        onClick={() => setIsCreateModalOpen(true)}
      >
        <AddIcon w={6} h={6} />
        New property
      </Button>

      <Form
        onSubmit={handleSubmit}
        setIsOpen={setIsCreateModalOpen}
        isOpen={isCreateModalOpen}
      />

      {(properties.length > 0 && (
        <>
          <h2 className="listTitle">Properties list:</h2>
          <S.PropertyWrapper>
            {properties.map((prop) => (
              <S.Property key={prop._id}>
                <div>
                  <h2 className="title">{prop.name}</h2>
                  <div className="units">
                    {Object.entries(prop.units).map((entry, index) => {
                      return (
                        <p key={index} className="unit">
                          {`${entry[1]}x ${entry[0]}`}
                        </p>
                      )
                    })}
                  </div>
                </div>
                <Button
                  colorScheme="red"
                  variant="solid"
                  size="sm"
                  onClick={() => handleModal(prop._id)}
                >
                  <DeleteIcon w={4} h={4} />
                </Button>
              </S.Property>
            ))}
          </S.PropertyWrapper>
        </>
      )) || <p>No properties have been added.</p>}
      <Dialog
        title="Delete Property"
        onClose={handleDelete}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        description="Are you sure you want to delete this property?"
      />
    </S.Container>
  )
}
