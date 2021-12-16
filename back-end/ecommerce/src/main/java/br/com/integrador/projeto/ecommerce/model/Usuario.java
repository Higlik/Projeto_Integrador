package br.com.integrador.projeto.ecommerce.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "tb_usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "O nome deve ser preenchido.")
	private String nome;
	
	@NotBlank(message = "O usuário deve ser preenchido.")
	@Email
	private String usuario;
	
	@NotBlank(message = "A senha deve ser preenchida.")
	@Size(min = 8, message = "A senha deve conter no minimo 8 caracteres.")
	private String senha;
	
	@NotBlank(message = "O telefone deve ser preenchido.")
	@Size(min = 11, message = "O telefone deve conter o DDD + os 9 números.")
	private String telefone;
	
	private String foto;
	
	@Column(name = "data_nascimento")
	@JsonFormat(pattern = "yyyy-MM-dd")
	@NotNull(message = "A data de nascimento não pode ser vazia")
	private LocalDate dataNascimento;
	
	
	public Usuario(long id, String nome, String usuario, String senha) {
	}	

	
	//----------------------------------------------------------------
	// GET AND SET
//-----------------------------------------------------------------

	

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

	public LocalDate getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}
}
