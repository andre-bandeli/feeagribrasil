import useSWR from 'swr'
import api from '../lib/api'
import { congressosFallback } from '../data/congressos'

const fetcher = url => api.get(url).then(r => r.data)

export function useCongressos() {
  const { data, error, isLoading } = useSWR('/congressos/', fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })

  return {
    congressos: error ? congressosFallback : (data?.results ?? []),
    total: error ? congressosFallback.length : (data?.count ?? 0),
    usingFallback: !!error,
    isLoading,
  }
}

export function useCongressoDetalhe(id) {
  const { data, error, isLoading } = useSWR(
    id ? `/congressos/${id}/` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )

  const fallback = congressosFallback.find(c => c.id === id) ?? null

  return {
    congresso: error ? fallback : (data ?? null),
    isLoading,
    error: error ?? null,
  }
}

export function useProximoCongresso() {
  const { data, error, isLoading } = useSWR('/congressos/proximo/', fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })

  const fallback = congressosFallback.find(c => c.proximo) ?? null

  return {
    congresso: error ? fallback : (data ?? null),
    usingFallback: !!error,
    isLoading,
  }
}

export function useNoticiaDestaque() {
  const { data, error, isLoading } = useSWR(
    '/noticias/?destaque_home=true',
    fetcher,
    { revalidateOnFocus: false, shouldRetryOnError: false }
  )

  return {
    noticia: data?.results?.[0] ?? null,
    isLoading,
    error: error ?? null,
  }
}