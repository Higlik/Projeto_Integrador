package br.com.integrador.projeto.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.integrador.projeto.ecommerce.model.Categoria;



@Repository
public interface CategoriaRepository extends JpaRepository <Categoria, Long> {
	public List <Categoria> findAllByGenero(String genero);
}
