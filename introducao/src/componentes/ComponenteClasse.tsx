import React, { Component } from 'react'
import { Pessoa } from '../interfaces/Pessoa'

interface StateTeste {
    pets: number
}

export default class ComponenteClasse extends Component<Pessoa> {

    state: StateTeste = {
        pets: 0,
    }

    adicionarPet = () => {

        let novoPet = this.state.pets

        this.setState({
            pets: novoPet + 1
        })
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        
    }


    render() {
        return (
            <div>
                <span>
                    Nome: {this.props.nome} - Doc: {this.props.documento} - Pets: {this.state.pets}
                </span>
                <button style={{
                    margin: 5
                }} onClick={() => this.adicionarPet()}>Adicionar Pet</button>
            </div>
        )
    }

}