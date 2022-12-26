import { useState, useEffect } from 'react'

const useFetch = (url, modfy) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${url}${modfy}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not fetch the data for that resourse')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setIsLoading(false)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [modfy, url])

  return { data, isLoading, error }
}
export default useFetch
