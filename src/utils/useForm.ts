import { ChangeEvent, FormEvent, useState } from 'react'

export type RegisterProps = {
  isRequired?: boolean
  customErrorMessage?: string
  isError: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string | number | readonly string[] | undefined
}

type FormProps<T> = {
  onSubmit: (data: T) => void
}

export const useForm = <T>({ onSubmit }: FormProps<T>) => {
  const [data, setData] = useState({})
  const [isSubmited, setIsSubmited] = useState(false)

  const manager = {
    onSubmit: (e: FormEvent) => {
      e.preventDefault()

      onSubmit(data as T)
      setIsSubmited(true)
    },
    reset: () => setData({}),
  }

  const register = (
    fieldName: string,
    config?: {
      isRequired?: boolean
      customErrorMessage?: string
    },
  ) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [fieldName]: event.target.value,
      }))
    }

    const value = data[fieldName as keyof typeof data] || ''
    const isError = isSubmited && (config?.isRequired ?? false) && value === ''

    return {
      isRequired: config?.isRequired,
      customErrorMessage: config?.customErrorMessage,
      isError,
      onChange,
      value,
    }
  }

  return {
    register,
    manager,
    data,
  }
}
