class Estudante {
    private _matricula: number;
    private _nome: string;
    private _provas: number[];
    private _trabalhos: number[];

    constructor(matricula: number, nome: string) {
        this._matricula = matricula;
        this._nome = nome;
        this._provas = [];
        this._trabalhos = [];
    }

    soma(): number {
        const notas = [...this._provas, ...this._trabalhos];

        const soma = notas.reduce((notaAnterior, nota) => {
            nota += notaAnterior;
            return nota;
        }, 0);

        return soma;
    }

    media(): number {
        const nota = this.soma();
        const divisor = this._provas.length + this._trabalhos.length;

        const media = Math.round(nota / divisor);

        return media;
    }

    get nome() {
        return this._nome;
    }

    get matricula() {
        return this._matricula;
    }
}