import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import { notify } from '../utils/notification'

export const useFetching = <T = [],>() => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetching = async (callback: () => Promise<AxiosResponse>) => {
    setIsLoading(true)
    try {
      const response = await callback()

      if (response.status > 299) {
        throw new Error()
      }

      setData(response.data)

      notify('Сокращено')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error?.message)
        notify(error?.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { fetching, data, error, isLoading }
}