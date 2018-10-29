package org.leo.projectzeta.facade;

import java.util.List;

import org.leo.projectzeta.model.Qualificacao;
import org.leo.projectzeta.repository.QualificacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QualificacaoFacade {

	@Autowired
	private QualificacaoRepository repository;

	public List<Qualificacao> getAll() {
		return repository.findAll();
	}

}
