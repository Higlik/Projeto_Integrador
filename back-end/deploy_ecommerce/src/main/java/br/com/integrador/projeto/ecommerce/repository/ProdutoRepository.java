package br.com.integrador.projeto.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.integrador.projeto.ecommerce.model.Produto;

	@Repository
	public interface ProdutoRepository extends JpaRepository <Produto, Long> {
		public List <Produto> findAllByNome(String nome);
	}

