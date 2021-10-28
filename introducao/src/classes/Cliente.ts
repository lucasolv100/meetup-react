export default class Cliente {

    public nome?: string;
    public documento: string;

    constructor(documento: string, nome?: string) {
        this.nome = nome;
        this.documento = documento;
    }
}

export class Cliente2 extends Cliente {
    constructor(nome: string, documento: string) {
        super(nome, documento)
    }
}