import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../hook/useForm'

//* ARRAYS E OBJETOS PODEM SER DESESTRUTURADOS PARA PASSAR INFORMAÇÕES

function MainPage() {

  //* Armazenado dentro de uma variável o customHooke recebe vários argumento em forma de objeto desestruturado.

  const { form, onChange } = useForm({
    nome: '',
    idade: '',
    email: '',
    telefone: '',
    endereco: ''
  });

  //* Prevent default, como o próprio nome diz, previne efeitos previstos do comportamente do submit do form;

  //* A função submit do formulario é onde vc clica e envia todos os dados. Senao tivesse ela , vc ia enviar input por input. Você quer preencher tudo e dps enviar, Porém no comportamento padrão do formulário , ele atualiza a página e perde todos os valores preenchidos no input. E pra previnir isso , usamos o preventDefault na funcao
  
  const handleClick = (event) => {
    event.preventDefault()

    console.log(`nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email} `)
  }

  //* Value dos inputs passam a ser o 'objeto' estado .propriedades;

  return (

    <MainContainer>

      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>

        <label htmlFor='nome'>Nome:</label>
        <Input
          id='nome'
          name='nome'
          value={form.nome}
          onChange={onChange}
        />

        <label htmlFor='idade'>Idade:</label>
        <Input
          id='idade'
          name='idade'
          value={form.idade}
          onChange={onChange}
        />

        <label htmlFor='email'>E-mail:</label>
        <Input
          id='email'
          name='email'
          value={form.email}
          onChange={onChange}
        />

        <label htmlFor='telefone'>Telefone:</label>
        <Input
          id='telefone'
          name='telefone'
          value={form.telefone}
          onChange={onChange}
        />

        <label htmlFor='endereco'>Endereço:</label>
        <Input
          id='endereco'
          name='endereco'
          value={form.endereco}
          onChange={onChange}
        />


        <button type='submit'>Enviar dados</button>

      </Form>

    </MainContainer>
  )
}

export default MainPage
