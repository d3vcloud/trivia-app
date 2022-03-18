import { ChangeEvent, useState } from 'react'

const useForm = <T extends object>(initialState: T) => {
  const [formValues, setFormValues] = useState<T>(initialState)

  const reset = () => setFormValues(initialState)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return { formValues, handleInputChange, reset }
}

export default useForm
