export const required = value => (value?undefined:'Required');

export const maxLength = (maxLength, elemName)=> (values) => (
    values?.elemName.length<maxLength? undefined : `Max length is ${maxLength} symbols`
)