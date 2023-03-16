import * as yup from 'yup'

export const schemaAuthRegister = yup.object().shape({
    signUpName:yup.string().required('Required field').length(5,'Name length must be greater than 4'),
    signUpEmail:yup.string().email('Invalid email type').required('Required field'),
    signUpPassword:yup.string().min(6).max(18).required('Required field'),
    signUpConfirmPassword:yup.string().oneOf([yup.ref('signUpPassword')],'Password mismatch').required('Required field')
});
export const schemaAuthLogin = yup.object().shape({
    signInEmail:yup.string().email('Invalid email type').required('Required field'),
    signInPassword:yup.string().required('Required password')
})