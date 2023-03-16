import * as yup from 'yup'
export const schemaForgotten = yup.object().shape({
    email:yup.string().email('Incorrect email').required('Required field')
});