import { Meta } from '@storybook/react'

import Form from '.'
import React from 'react'
import Input from '../../atoms/Input'
import Password from '../../atoms/Password'
import Number from '../../atoms/Number'
import TextArea from '../../atoms/TextArea'
import Select from '../../atoms/Select'
import Radio from '../../atoms/Radio'
import Button from '../../atoms/Button'
import Container from '../../layouts/Container'
import File from 'designSystem/atoms/File'
import DatePicker from 'designSystem/atoms/DatePicker'
import ColorPicker from 'designSystem/atoms/ColorPicker'

export default {
  title: 'Molecules/Form',
  component: Form,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => (
  <Form
    onSubmitForm={(values: any) => {
      console.log(values)
    }}
  >
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Nombres"
      name="names"
    >
      <Input placeholder="Ingresa tus nombres" value="test2" />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Contraseña"
      name="password"
    >
      <Password placeholder="Ingresa tu contraseña" />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Celular"
      name="phone"
    >
      <Number placeholder="Ingresa tu celular" />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Comentario"
      name="comment"
    >
      <TextArea placeholder="Ingresa tu comentario" />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Elige un pais"
      name="country"
    >
      <Select
        isClearable
        placeholder="Type your option"
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Elige tu genero"
      name="gender"
    >
      <Radio>
        <Radio.Item isChecked value="one">
          A
        </Radio.Item>
        <Radio.Item value="two">B</Radio.Item>
        <Radio.Item value="three">C</Radio.Item>
      </Radio>
    </Form.Item>
    <Form.Item name="submit">
      <Button width="full" type="submit" variant="primary" rounded="sm">
        Submit
      </Button>
    </Form.Item>
  </Form>
)

export const WithUseForm = () => {
  const { form } = Form.useForm({
    defaultValue: {
      names: 'test',
      password: 'description',
      filelist: [
        {
          id: 1,
          url: 'https://menudigital011023.s3.amazonaws.com/1673459873090-component_gaminote2.png',
        },
        {
          id: 2,
          url: 'https://menudigital011023.s3.amazonaws.com/1673465177914-1665576018479.jpg',
        },
      ],
      datestart: new Date(2022, 0, 1),
    },
  })

  const handleSubmit = () => {
    form.validate()
  }

  return (
    <Container>
      <Form
        form={form}
        onSubmitForm={(values: any) => {
          console.log(values)
        }}
      >
        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Nombres"
          name="names"
        >
          <Input placeholder="Titulo" />
        </Form.Item>
        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Contraseña"
          name="password"
        >
          <Input placeholder="Descripcion" />
        </Form.Item>
        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Fecha Inicio"
          name="datestart"
        >
          <DatePicker formatter="dd/MM/yy" />
        </Form.Item>
        <Form.Item
          rules={[
            { type: 'required', message: 'Campo requerido' },
            {
              type: 'custom',
              message: 'Fecha inicio es mayor que la fin',
              fn: (value, formValues) => {
                const { datestart } = formValues
                const dateStart = new Date(datestart)
                const dateEnd = new Date(value)

                const isGreaterThanDateEnd = dateStart > dateEnd

                return !isGreaterThanDateEnd
              },
            },
          ]}
          label="Fecha Fin"
          name="dateend"
        >
          <DatePicker formatter="dd/MM/yy" />
        </Form.Item>
        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Color"
          name="colorpicker"
        >
          <ColorPicker />
        </Form.Item>
        <Form.Item
          rules={[
            { type: 'required', message: 'Campo requerido' },
            {
              type: 'minLength',
              message: 'Debes cargar minimo 1 imagen',
              value: 1,
            },
            {
              type: 'maxLength',
              message: 'El limite de imagenes es de 5',
              value: 5,
            },
          ]}
          label="Archivos para cargar"
          name="filelist"
        >
          <File withPreview isMultiple />
        </Form.Item>
        <Form.Item label="Elige un pais" name="country">
          <Select
            isClearable
            placeholder="Type your option"
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          />
        </Form.Item>
      </Form>

      <Container>
        <Button onClick={handleSubmit}>Submit</Button>
      </Container>
    </Container>
  )
}
