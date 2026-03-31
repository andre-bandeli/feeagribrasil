import useSWR from 'swr'
import api from '../lib/api'

const fetcher = url => api.get(url).then(r => r.data)

/**
 * Busca a gestão marcada como ativa no backend.
 * O GestaoSerializer já aninha os arrays `membros` e `delegados`,
 * então um único request serve tanto Membros.jsx quanto Delegacao.jsx.
 *
 * Campos disponíveis por array:
 *   membros[]   → { id, nome, cargo, cargo_display, curso, instituicao, foto, ordem }
 *   delegados[] → { id, nome, instituicao, sigla, foto }
 */
export function useGestaoAtiva() {
  const { data, error, isLoading } = useSWR(
    '/membros/gestoes/?ativa=true',
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )

  // DRF DefaultRouter pagina listas em { count, results }
  const gestao = data?.results?.[0] ?? data?.[0] ?? null

  return {
    gestao,
    membros:   gestao?.membros   ?? [],
    delegados: gestao?.delegados ?? [],
    isLoading,
    error: error ?? null,
  }
}

/**
 * Busca todas as gestões cadastradas no backend, ordenadas da mais
 * recente para a mais antiga (o backend deve ordenar por -ano ou similar).
 *
 * Cada gestão já traz `membros` e `delegados` aninhados,
 * igual ao useGestaoAtiva — mesmo serializer, sem request extra.
 *
 * Retorno:
 *   gestoes[] → { id, ano, nome?, ativa, membros[], delegados[] }
 */
export function useTodasGestoes() {
  const { data, error, isLoading } = useSWR(
    '/membros/gestoes/',
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )

  // Suporta tanto lista paginada { count, results[] } quanto array direto
  const gestoes = data?.results ?? data ?? []

  return {
    gestoes,
    isLoading,
    error: error ?? null,
  }
}
