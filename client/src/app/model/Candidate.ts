import { Qualificacao } from "./Qualificacao";

export class Candidate {

    qualificacoes: Qualificacao[];

    constructor(private name: String, private lastName: string, private id: number) {
        this.qualificacoes = [];
    }

    public removeQualificacao(value: string) {

        let qualificacao: Qualificacao = this.qualificacoes.find(x => x.fullName() == value);

        if (qualificacao != null) {
            this.qualificacoes.splice(this.qualificacoes.indexOf(qualificacao), 1);
        }

    }

    public hasQualificacao(value: String): boolean {
        return this.qualificacoes.filter(qualificacao => qualificacao.fullName() == value).length > 0;
    }

}
