import { useForm } from "react-hook-form"
import axios from "axios";
import { useEffect, useState } from "react";

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0,0.7)',
    zindex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '45%', // alterado para 50%
    left: '50%', // alterado para 50%
    transform: 'translate(-50%, -50%)', // corrigido para transform
    backgroundColor: 'white', // cor de fundo da div
    padding: '20px', // espaçamento interno
    zIndex: '1000',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
}

export default function modal({isOpen, setCloseModal}){
    if(isOpen){
        return(
            <div style={BACKGROUND_STYLE}>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg bg-white p-5 rounded-lg m-5" style={MODAL_STYLE}>
                    <h2 className="mt-5 mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Deseja EXCLUIR essa conta?</h2>
                    <form>
                    <div className="flex align-center gap-5">
                        <button className="flex w-full justify-center rounded-full bg-red-600 px-3 py-2 mt-4 text-sm font-semibold leading-6 text-white hover:bg-black focus:outline-none focus:ring focus:border-red-300" type="submit">SIM</button>
                        <button className="flex w-full justify-center rounded-full bg-red-600 px-3 py-2 mt-4 text-sm font-semibold leading-6 text-white hover:bg-black focus:outline-none focus:ring focus:border-red-300" type="submit" onClick={() => setCloseModal()}>NÃO</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }

    return null
}