import {useEffect, useState} from 'react'

export default function useMedia(queries, values, defaultValue) {
  const match = () => {
    if (typeof window !== 'undefined') {
      return (
        values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue
      )
    } else return defaultValue
  }
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handler)
      return () => window.removeEventListener(handler)
    } else return null
  }, [])
  return value
}
