package org.leo.projectzeta.model;

import java.io.Serializable;
import java.util.Set;

public class Candidato implements Serializable {

	private static final long serialVersionUID = 7401417159169226473L;

	private Long id;

	private String nome;

	private String sobrenome;

	private Set<Qualificacao> qualificacoes;

	public Candidato(Long id) {
		super();
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public Set<Qualificacao> getQualificacoes() {
		return qualificacoes;
	}

	public void setQualificacoes(Set<Qualificacao> qualificacoes) {
		this.qualificacoes = qualificacoes;
	}

}
