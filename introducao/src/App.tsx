import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cliente, { Cliente2 } from '../src/classes/Cliente'
import { Pessoa } from './interfaces/Pessoa';
import Teste from '../src/componentes/Teste'
import Contador from './componentes/Contador';
import ComponenteClasse from './componentes/ComponenteClasse';

function App() {

  let xpto: string[];
  let numero: number = 123
  let decimal: number = 12.4
  let verdadeiro: boolean = false

  let funcao: () => void
  let qqCoisa: any

  let cliente = new Cliente('João', '123456');

  let pessoa: Pessoa = {
    nome: 'Joao',
    documento: '4564654'
  }

  cliente = pessoa as Cliente


  return (
    <div>
      {/* <Teste nome={'João'} documento={'456465789'} telefone={'56456465'} />
      <Teste nome={'João 2'} documento={'999999'} telefone={'56456465'} />
      <Teste nome={'João 3'} documento={'45656'} telefone={'56456465'} /> */}
      {/* <Contador />
      <Contador />
      <Contador /> */}
      <ComponenteClasse nome={'João'} documento={'456465789'} />
      <ComponenteClasse nome={'Pedro'} documento={'99999999'} />
    </div>
  );
}

export default App;
