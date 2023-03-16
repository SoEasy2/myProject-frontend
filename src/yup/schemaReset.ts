import * as yup from 'yup'
export const schemaResetPassword = yup.object().shape({
    password:yup.string().required('Required field').min(6,'Password must be at least 6 characters').max(18,
        'Password must be at most 18 characters').required('Required field'),
    confirm:yup.string().oneOf([yup.ref('password')],'Password mismatch').required('Required field')

});