import useSWR from 'swr'
import api from '../lib/api'

const fetcher = url => api.get(url).then(r => r.data)

export function useParceiros() {
  const { data, error, isLoading } = useSWR(
    '/parceiros/',
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )

  const parceiros = data?.results ?? data ?? []

  const porTipo = parceiros.reduce((acc, p) => {
    const key = p.tipo ?? 'apoio'
    if (!acc[key]) acc[key] = []
    acc[key].push(p)
    return acc
  }, {})

  return {
    parceiros,
    porTipo,
    total: data?.count ?? parceiros.length,
    isLoading,
    error: error ?? null,
  }
}