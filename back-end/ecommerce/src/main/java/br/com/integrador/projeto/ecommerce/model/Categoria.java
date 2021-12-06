package br.com.integrador.projeto.ecommerce.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_categorias")
public class Categoria {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@NotBlank(message = "O gênero deve ser preenchido.")
	@Size(min = 5, max = 50, message = "O gênero deve conter entra 5 e 50 caracteres.")
	private String genero;
	
	@NotBlank(message = "O subgênero deve ser preenchido.")
	@Size(min = 5, max = 50, message = "O subgênero deve conter entra 5 e 50 caracteres.")
	private String subgenero;
	
	@NotNull
	@Size(min = 0, max = 1000, message = "O subgênero deve conter até 1000 caracteres.")
	private String descricao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getSubgenero() {
		return subgenero;
	}

	public void setSubgenero(String subgenero) {
		this.subgenero = subgenero;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
