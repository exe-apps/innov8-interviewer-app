export const Required = value => (value ? undefined : 'Required')

export const BooleanChecker = value => 
    (value !== undefined ? undefined : 'Required')

export const EmailValidator = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined