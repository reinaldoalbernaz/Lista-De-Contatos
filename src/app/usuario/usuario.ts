export interface IUsuario {
    id?: number;
    nome?: string;
    telefone?: string;
    email?: string;
    data?: string;
}

export class IUsuario implements IUsuario  {
    constructor(
        public id?: number,
        public nome?: string,
        public telefone?: string,
        public email?: string,
        public data?: string
    ) { }
}
