import * as Yup from 'yup'

export const signInSchema= Yup.object({
    email:Yup.string().email().required("Please Enter your email"),
    password:Yup.string().min(6).required("Please Enter your password"),
})

export const createUserSchema= Yup.object({
    name:Yup.string().min(3).max(25).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter your name"),
    employee_name:Yup.string().min(3).max(25).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter  employee name"),
    employee_id: Yup.number().typeError("Employee ID must be a number").required("Enter your id").test('len', 'Employee ID must be exactly 8 digits', val => val.toString().length === 8),
    Role: Yup.string().required('Please select a role'), 
    Branch: Yup.string().required('Please select a branch'), 
    password:Yup.string().min(6).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Please Enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null], "Password must match"),
})
export const editUserSchema= Yup.object({
    name:Yup.string().min(3).max(25).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter your name"),
    employee_name:Yup.string().min(3).max(25).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter  employee name"),
    employee_id: Yup.number().typeError("Employee ID must be a number").required("Enter your id").test('len', 'Employee ID must be exactly 8 digits', val => val.toString().length === 8),
    Role: Yup.string().required('Please select a role'), 
    Branch: Yup.string().required('Please select a branch'), 
    password:Yup.string().min(6).matches(/^\S*$/, 'Password cannot contain spaces').required("Please Enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null], "Password must match"),
})

export const addProductSchema= Yup.object({
    group: Yup.string().required('Please select a group'), 
    category: Yup.string().required('Please select an category'),
    house: Yup.string().required('Please select an warehouse'),
    size: Yup.string().required('Please select a size'),
    brand: Yup.string().required('Please select a brand'),
    type: Yup.string().required('Please select a type'),
    name:Yup.string().min(5).max(40).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter product name"),
    price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .matches(/^\.(?=.*\.)|^([^.]*\.[^.]*)$/, 'Only one decimal point allowed')
    .required('Price is required'),
    message: Yup.string()
    .max(200, 'Description must be at most 200 characters')
    .required('Description is required'),

})
export const editProductSchema= Yup.object({
    group: Yup.string().required('Please select a group'), 
    category: Yup.string().required('Please select an category'),
    house: Yup.string().required('Please select an warehouse'),
    size: Yup.string().required('Please select a size'),
    brand: Yup.string().required('Please select a brand'),
    type: Yup.string().required('Please select a type'),
    name:Yup.string().min(5).max(40).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter product name"),
    price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .matches(/^\.(?=.*\.)|^([^.]*\.[^.]*)$/, 'Only one decimal point allowed')
    .required('Price is required'),
    message: Yup.string()
  .max(200, 'Description must be at most 200 characters')
  .required('Description is required'),

})
export const editPriceSchema=Yup.object({
    price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .matches(/^\.(?=.*\.)|^([^.]*\.[^.]*)$/, 'Only one decimal point allowed')
    .required('Price is required'),

})