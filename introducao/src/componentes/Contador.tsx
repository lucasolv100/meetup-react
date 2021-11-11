import React, { useState, useEffect } from 'react'

export default function Contador() {

    const [numero, setNumero] = useState<number>(0);
    const [texto, setTexto] = useState<string>('')
    const [arrTexto, setArrTexto] = useState<string[]>([])


    //Só é chamado uma vez
    useEffect(() => {
        const texto123 = 'Esse é o novo texto ' + numero;
        setTexto(texto123)
        let novoArr = arrTexto
        novoArr.push(texto123)
        setArrTexto(novoArr)
    }, [numero]);

    //É chamado constantemente
    // useEffect(() => {
    //     console.log('teste')
    // });

    useEffect(() => {

    })


    return (
        <div>
            <div>
                <button onClick={() => setNumero(numero - 1)}>-</button>

                <span style={{
                    margin: 5
                }}>{numero}</span>

                <button onClick={() => setNumero(numero + 1)}>+</button>
            </div>
            {/* <div>
                <span>{texto}</span>

            </div>

            {
                arrTexto.map(texto => <div><span>{texto}</span></div>)
            } */}

        </div>
    )
}