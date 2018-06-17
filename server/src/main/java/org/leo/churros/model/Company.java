package org.leo.churros.model;

import java.io.Serializable;

public class Company implements Serializable {

	private static final long serialVersionUID = 7401417159169226473L;

	private Long id;

	public Company(Long id) {
		super();
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
