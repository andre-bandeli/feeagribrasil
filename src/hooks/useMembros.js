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