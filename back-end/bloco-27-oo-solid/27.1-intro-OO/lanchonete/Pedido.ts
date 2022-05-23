import Cliente from "./Cliente";
import Item from "./Item";

class Pedido {
    private _cliente: Cliente;
    private _itens: Item[];
    private _pagamento: string;
    private _desconto?: number;

    constructor(cliente: Cliente, itens: Item[], pagamento: string) {
        this._cliente = cliente;
        this._itens = itens;
        this._pagamento = pagamento;
    }
}