import axios from "axios";
import { useEffect, useState } from "react";
import style from "@/styles/listausuarios.module.css";

export default function Clientes(){
    const [clientes, setClientes] = useState([])
    useEffect(()=>{
        trazerDados()
    }, [])

    const trazerDados = async ()=> {
        const { data } = await axios.get('http://localhost:3333/listaCliente')
        // Mapeia os dados e formata a data de nascimento
        const clientesFormatados = data.map(item => ({
            ...item,
            DataNascimento: new Date(item.DataNascimento).toLocaleDateString()
        }));
        setClientes(clientesFormatados);
    }
    
    return(
        <main className="text-black">
            <div className={style.container}>
                <div className={style.parteGerente}>
                    <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    <h1>USERNAME</h1>
                    
                    <div className={style.divgerente}>
                        <button>CLIENTES</button>
                        <button>FUNCIONÁRIOS</button>
                        <button>FINANCEIRO</button>
                    </div>
                    <div className={style.divsair}>
                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.875 46.375H11.0417C9.87029 46.375 8.7469 45.9097 7.91861 45.0814C7.09033 44.2531 6.625 43.1297 6.625 41.9583V11.0417C6.625 9.87029 7.09033 8.7469 7.91861 7.91861C8.7469 7.09033 9.87029 6.625 11.0417 6.625H19.875" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M35.3333 37.5416L46.3749 26.5L35.3333 15.4583" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M46.375 26.5H19.875" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect width="53" height="53" stroke="black"/>
                        </svg> 
                        <p>SAIR</p>
                    </div>
                    
                </div>
                <div className={style.parteLista}>
                    <div className={style.paraTabela}>
                        <table className={style.tabela}>
                            <thead>
                                <tr className={style.tabelaCabecalho}>
                                    <th className={style.cabecalho}>Nome</th>
                                    <th className={style.cabecalho}>Sexo</th>
                                    <th className={style.cabecalho}>Data de Nascimento</th>
                                    <th className={style.cabecalho}>CPF</th>
                                    <th className={style.cabecalho}>Email</th>
                                    <th className={style.cabecalho}>Telefone</th>
                                    <th className={style.cabecalho}>Plano</th>
                                    <th className={style.cabecalho}>Pacote</th>
                                    <th className={style.cabecalho}>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map(items=>{
                                    return(
                                        <tr className={style.linha}>
                                            <td className={style.dados}>{items.nome}</td>
                                            <td className={style.dados}>{items.sexo}</td>
                                            <td className={style.dados}>{items.DataNascimento}</td>
                                            <td className={style.dados}>{items.cpf}</td>
                                            <td className={style.dados}>{items.email}</td>
                                            <td className={style.dados}>{items.telefone}</td>
                                            <td className={style.dados}>{items.TipoPlano}</td>
                                            <td className={style.dados}>{items.PacotePlano}</td>
                                            <td className={style.dadosEdit}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}