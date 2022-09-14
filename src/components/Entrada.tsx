interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => any
}

export default function Formulario(props: EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className={`mb-2`}>
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border border-pink-500 rounded-lg
                    focus:outline-none bg-pink-200
                    px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-pink-50'}
                `}
            />
        </div>
    )
}