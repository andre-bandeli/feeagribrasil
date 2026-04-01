import useSWR from 'swr'
import api from '../lib/api'

const fetcher = url => api.get(url).then(r => r.data)

/**
 * Busca as newsletters publicadas, ordenadas por numero desc.
 * @param {number} limit - Quantas retornar (padrão: 4)
 */
export function useNewsletter({ limit = 4 } = {}) {
  const { data, error, isLoading } = useSWR(
    `/newsletters/?limit=${limit}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )

  const newsletters = data?.results ?? data ?? []

  return {
    newsletters: newsletters.slice(0, limit),
    total: data?.count ?? newsletters.length,
    isLoading,
    error: error ?? null,
  }
}