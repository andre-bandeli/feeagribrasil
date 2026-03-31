import React, { useState, useMemo } from 'react'
import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import './Instituicoes.scss'
import PageHero from '../../componentes/PageHero/PageHero'


const institutionsData = [
  // Engenharia Agrícola
  { nome: "Universidade Estadual de Maringá", sigla: "UEM", local: "Maringá, PR", curso: "Engenharia Agrícola", fundacao: 2010 },
  { nome: "Universidade Estadual de Goiás", sigla: "UEG", local: "Anápolis, GO", curso: "Engenharia Agrícola", fundacao: 2000 },
  { nome: "Universidade Federal de Viçosa", sigla: "UFV", local: "Viçosa, MG", curso: "Engenharia Agrícola e Ambiental", fundacao: 2010 },
  { nome: "Universidade Federal do Ceará", sigla: "UFC", local: "Fortaleza, CE", curso: "Engenharia Agrícola", fundacao: 1976 },
  { nome: "Universidade Federal de Campina Grande", sigla: "UFCG", local: "Campina Grande, PB", curso: "Engenharia Agrícola", fundacao: 2002 },
  { nome: "Universidade Federal de Pelotas", sigla: "UFPel", local: "Pelotas, RS", curso: "Engenharia Agrícola", fundacao: 1976 },
  { nome: "Universidade Federal de Lavras", sigla: "UFLA", local: "Lavras, MG", curso: "Engenharia Agrícola", fundacao: 1993 },
  { nome: "Universidade Federal do Recôncavo da Bahia", sigla: "UFRB", local: "Cruz das Almas, BA", curso: "Engenharia Agrícola", fundacao: 2006 },
  { nome: "Universidade Federal de Roraima", sigla: "UFRR", local: "Boa Vista, RR", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal de Varginha", sigla: "UNIFAL", local: "Varginha, MG", curso: "Engenharia Agrícola", fundacao: 2014 },
  { nome: "Universidade Estadual de Campinas", sigla: "UNICAMP", local: "Campinas, SP", curso: "Engenharia Agrícola", fundacao: 1976 },
  { nome: "Universidade Estadual do Oeste do Paraná", sigla: "UNIOESTE", local: "Cascavel, PR", curso: "Engenharia Agrícola", fundacao: 1994 },
  { nome: "Universidade Federal da Grande Dourados", sigla: "UFGD", local: "Dourados, MS", curso: "Engenharia Agrícola", fundacao: 2006 },
  { nome: "Universidade Federal de Goiás", sigla: "UFG", local: "Goiânia, GO", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal de Mato Grosso", sigla: "UFMT", local: "Cuiabá, MT", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal dos Vales do Jequitinhonha e Mucuri", sigla: "UFVJM", local: "Unaí, MG", curso: "Engenharia Agrícola e Ambiental", fundacao: 2010 },
  { nome: "Universidade Federal do Vale do São Francisco", sigla: "UNIVASF", local: "Juazeiro, BA", curso: "Engenharia Agrícola", fundacao: 2012 },
  { nome: "Universidade Federal do Espírito Santo", sigla: "UFES", local: "Alegre, ES", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal de Minas Gerais", sigla: "UFMG", local: "Belo Horizonte, MG", curso: "Engenharia Agrícola", fundacao: 2006 },
  { nome: "Universidade Federal do Rio Grande do Sul", sigla: "UFRGS", local: "Porto Alegre, RS", curso: "Engenharia Agrícola", fundacao: 2000 },
  { nome: "Universidade Federal do Pará", sigla: "UFPA", local: "Belém, PA", curso: "Engenharia Agrícola", fundacao: 2012 },
  { nome: "Universidade Federal de Rondônia", sigla: "UNIR", local: "Porto Velho, RO", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal do Tocantins", sigla: "UFT", local: "Gurupi, TO", curso: "Engenharia Agrícola", fundacao: 2003 },
  { nome: "Faculdades Integradas Espírita", sigla: "FIES", local: "Curitiba, PR", curso: "Engenharia Agrícola", fundacao: 1998 },
  { nome: "Fundação Universidade Federal do Pampa", sigla: "UNIPAMPA", local: "Bagé, RS", curso: "Engenharia Agrícola", fundacao: 2010 },
  { nome: "Instituto Federal Farroupilha", sigla: "IFFarroupilha", local: "Farroupilha, RS", curso: "Engenharia Agrícola", fundacao: 2010 },
  { nome: "Faculdade de Educação e Cultura de Vilhena", sigla: "FAEV", local: "Vilhena, RO", curso: "Engenharia Agrícola", fundacao: 2017 },
  { nome: "Universidade Federal do Maranhão", sigla: "UFMA", local: "São Luís, MA", curso: "Engenharia Agrícola", fundacao: 2014 },
  { nome: "Universidade Federal do Paraná", sigla: "UFPR", local: "Jandaia do Sul, PR", curso: "Engenharia Agrícola", fundacao: 2014 },
  { nome: "Universidade Federal Rural do Rio de Janeiro", sigla: "UFRRJ", local: "Seropédica, RJ", curso: "Engenharia Agrícola e Ambiental", fundacao: 2000 },
  { nome: "Universidade de Santa Cruz do Sul", sigla: "UNISC", local: "Santa Cruz do Sul, RS", curso: "Engenharia Agrícola", fundacao: 1995 },
  { nome: "Universidade Federal de Sergipe", sigla: "UFS", local: "São Cristóvão, SE", curso: "Engenharia Agrícola", fundacao: 2010 },
  { nome: "Universidade de Mogi das Cruzes", sigla: "UMC", local: "Mogi das Cruzes, SP", curso: "Engenharia Agrícola", fundacao: null },
  { nome: "Centro Universitário União das Américas Descomplica", sigla: "UNIAMÉRICA", local: "Foz do Iguaçu, PR", curso: "Engenharia Agrícola", fundacao: null },
  { nome: "Instituto Federal Goiano", sigla: "IF Goiano", local: "Urutaí, GO", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal Rural da Amazônia", sigla: "UFRA", local: "Tomé-Açu, PA", curso: "Engenharia Agrícola", fundacao: 2014 },
  { nome: "Universidade Regional Integrada do Alto Uruguai e das Missões", sigla: "URI", local: "RS", curso: "Engenharia Agrícola", fundacao: 1998 },
  { nome: "Universidade Federal Fluminense", sigla: "UFF", local: "Niterói, RJ", curso: "Engenharia Agrícola e Ambiental", fundacao: 1993 },
  { nome: "Instituto Federal do Ceará", sigla: "IFCE", local: "Fortaleza, CE", curso: "Engenharia Agrícola", fundacao: 2020 },
  { nome: "Universidade Federal Rural de Pernambuco", sigla: "UFRPE", local: "Recife, PE", curso: "Engenharia Agrícola e Ambiental", fundacao: 2002 },
  // Engenharia de Biossistemas
  { nome: "Instituto Federal de São Paulo", sigla: "IFSP", local: "Avaré, SP", curso: "Engenharia de Biossistemas", fundacao: 2017 },
  { nome: "Universidade Federal de Campina Grande", sigla: "UFCG", local: "Campina Grande, PB", curso: "Engenharia de Biossistemas", fundacao: 2009 },
  { nome: "Universidade de São Paulo", sigla: "USP", local: "Pirassununga, SP", curso: "Engenharia de Biossistemas", fundacao: 2009 },
  { nome: "Universidade Estadual Paulista", sigla: "UNESP", local: "Tupã, SP", curso: "Engenharia de Biossistemas", fundacao: 2014 },
]

const CURSOS = ['Todos', 'Engenharia Agrícola', 'Engenharia Agrícola e Ambiental', 'Engenharia de Biossistemas']

const cursoBadgeClass = (curso) => {
  if (curso.includes('Ambiental')) return 'it-badge it-badge--eaa'
  if (curso.includes('Biossistemas')) return 'it-badge it-badge--eb'
  return 'it-badge it-badge--ea'
}

export default function Instituicoes() {
  const [filtro, setFiltro] = useState('Todos')
  const [busca, setBusca] = useState('')

  const dados = useMemo(() => {
    return institutionsData.filter(inst => {
      const matchCurso = filtro === 'Todos' || inst.curso === filtro
      const matchBusca =
        busca === '' ||
        inst.nome.toLowerCase().includes(busca.toLowerCase()) ||
        inst.sigla.toLowerCase().includes(busca.toLowerCase()) ||
        inst.local.toLowerCase().includes(busca.toLowerCase())
      return matchCurso && matchBusca
    })
  }, [filtro, busca])

  return (
    <div className="it-page">
      <Header />

      <PageHero
        eyebrow="Rede Nacional"
        title="Instituições"
        subtitle="Conheça as universidades e institutos que formam engenheiros agrícolas, agrícolas e ambientais e de biossistemas em todo o Brasil."
        wm="IT"
      />

      {/* ── Controles ── */}
      <div className="it-controls">
        <div className="it-controls__inner">
          {/* Busca */}
          <div className="it-search">
            <svg className="it-search__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M14 14l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              className="it-search__input"
              type="search"
              placeholder="Buscar por nome, sigla ou estado…"
              value={busca}
              onChange={e => setBusca(e.target.value)}
              aria-label="Buscar instituição"
            />
          </div>

          {/* Filtro de curso */}
          <div className="it-filter" role="group" aria-label="Filtrar por curso">
            <span className="it-filter__label">Curso</span>
            <div className="it-filter__pills">
              {CURSOS.map(c => (
                <button
                  key={c}
                  className={['it-filter__pill', filtro === c ? 'it-filter__pill--on' : ''].join(' ')}
                  onClick={() => setFiltro(c)}
                  aria-pressed={filtro === c}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Contador */}
          <p className="it-controls__count" aria-live="polite">
            {dados.length} instituição{dados.length !== 1 ? 's' : ''} encontrada{dados.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* ── Tabela ── */}
      <main className="it-main">
        <div className="it-table-wrap">
          <table className="it-table" aria-label="Lista de instituições">
            <thead>
              <tr>
                <th scope="col">Instituição</th>
                <th scope="col">Sigla</th>
                <th scope="col">Localização</th>
                <th scope="col">Curso</th>
                <th scope="col">Ano</th>
              </tr>
            </thead>
            <tbody>
              {dados.length > 0 ? (
                dados.map((inst, i) => (
                  <tr key={i}>
                    <td className="it-table__nome">{inst.nome}</td>
                    <td>
                      <span className="it-sigla">{inst.sigla}</span>
                    </td>
                    <td className="it-table__local">
                      <span className="it-local__dot" aria-hidden="true" />
                      {inst.local}
                    </td>
                    <td>
                      <span className={cursoBadgeClass(inst.curso)}>{inst.curso}</span>
                    </td>
                    <td className="it-table__ano">
                      {inst.fundacao ?? <span className="it-table__nd">—</span>}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="it-table__empty">
                    Nenhuma instituição encontrada para os filtros selecionados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <p className="it-caption">Dados atualizados em 2025 · Fonte: MEC</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}