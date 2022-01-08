import * as yup from 'yup'

export const schemaCreateAd = yup.object().shape({
    name:yup.string().required('Required field').min(3,'Minimum length is 3 characters').max(20,'Maximum length is 20 characters'),
    desk:yup.string().required('Required field').max(300, 'Maximum length is 300 characters'),
    shortDesk:yup.string().required('Required field').max(50, 'Maximum length is 50 characters'),
    price:yup.number().positive('Incorrect data').required('Required field').max(30, 'Maximum length is 50 characters')

});