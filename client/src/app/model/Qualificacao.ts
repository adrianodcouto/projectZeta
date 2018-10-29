import { Deserializable } from "./Deserializable";

export class Qualificacao implements Deserializable {

    descricao: string;
    versao: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    public fullName() {
        return this.descricao + " " + this.versao;
    }

}