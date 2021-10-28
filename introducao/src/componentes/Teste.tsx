import React, { useEffect, useState } from 'react'
import { Pessoa } from '../interfaces/Pessoa'


export default function Teste(props: Pessoa) {

    return (
        <div>
            <span>{props.nome} - {props.documento}</span>
        </div>
    )
}