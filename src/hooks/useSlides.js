import useSWR from 'swr'
import api from '../lib/api'
import { slidesDataStatic } from '../paginas/secundarias/slidesData'

const fetcher = url => api.get(url).then(r => r.data)

export function useSlides() {
  const { data, error, isLoading } = useSWR('/hero/slides/', fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })

  return {
    slides: error ? slidesDataStatic : (data?.results ?? data ?? slidesDataStatic),
    usingFallback: !!error,
    isLoading,
  }
}