import useSWR from 'swr'
import api from '../lib/api'

const fetcher = url => api.get(url).then(r => r.data)

/**
 * Busca uma newsletter publicada pelo slug.
 * @param {string} slug
 */
export function useNewsletterPost(slug) {
  const { data, error, isLoading } = useSWR(
    slug ? `/newsletters/${slug}/` : null,  // null suspende a requisição
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )

  return {
    post: data ?? null,
    isLoading,
    error: error ?? null,
  }
}