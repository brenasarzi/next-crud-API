import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Formulario from "../components/Formulario"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import { useState } from "react"

export default function Home() {
  
  const clientes = [
    new Cliente('Ana', 23, '1'),
    new Cliente('João', 43, '2'),
    new Cliente('Maria', 45, '3'),
    new Cliente('Felipe', 18, '4')
  ]

  const[visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
 
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)

  }
  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    // setVisivel('tabela')
  }
  return (
    <div className={`
        flex h-screen
        justify-center
        items-center
        bg-gradient-to-r from-purple-500 to-red-500
    `}>

      <Layout titulo="Cadastro">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">      
              <Botao cor="red" className="mb-4"
                onClick={() => setVisivel('form')}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExcluido}
            />
          </>
        ):(
          <Formulario
            cliente={clientes[3]}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          ></Formulario>
        )}
       
      </Layout>
    </div>
  )
}
