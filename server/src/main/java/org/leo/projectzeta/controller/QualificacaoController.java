package org.leo.projectzeta.controller;

import java.util.List;

import org.leo.projectzeta.facade.QualificacaoFacade;
import org.leo.projectzeta.model.Qualificacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/secured/qualificacao")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class QualificacaoController {

	@Autowired
	private QualificacaoFacade facade;

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Qualificacao> getAll() {
		return facade.getAll();
	}

}