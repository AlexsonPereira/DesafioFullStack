import * as yup from 'yup'

export const schema = yup
  .object({
    name: yup.string().required('Nome é obrigatorio'),
    phone: yup.string().required('Telefone é obrigatorio'),
    email: yup.string().email('Deve ser um e-mail válido').required('Email é obrigatório'),
    password: yup.string().matches(/.{6,}/, 'Deve ter no minimo 6 digitos').required('Senha é obrigatória')
  })
  .required()
