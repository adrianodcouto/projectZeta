import { Candidate } from "./Candidate";
import { Qualificacao } from "./Qualificacao";

fdescribe('Candidate', () => {

  beforeEach(() => {

  });

  fit('should return true, since they have the qualificacao', () => {

    let candidate: Candidate = new Candidate('Leonardo', 'Otero', 10);

    let qualificacao : Qualificacao = new Qualificacao();
    qualificacao.descricao = "java";
    qualificacao.versao = "8";

    candidate.qualificacoes = [qualificacao];

    expect(candidate.hasQualificacao("java 8")).toBeTruthy();

  });

  fit('should return false, since they DONT have the qualificacao', () => {

    let candidate: Candidate = new Candidate('Leonardo', 'Otero', 10);

    let qualificacao : Qualificacao = new Qualificacao();
    qualificacao.descricao = "java";
    qualificacao.versao = "8";

    candidate.qualificacoes = [qualificacao];

    expect(candidate.hasQualificacao("java 7")).toBeFalsy();

  });

});
