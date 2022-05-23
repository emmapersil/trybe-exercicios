export default class Item {
    private _nome: string;
    private _preco: number;

    constructor(nome: string, preco: number) {
        this._nome = nome;
        this._preco = preco;
    }

    get preco() {
        return this._preco;
    }
}