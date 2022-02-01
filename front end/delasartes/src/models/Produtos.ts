import Categorias from './Categorias'

interface Produtos {
    id: Number;
    nome: string;
    valor: Number;
    descricao: string;
    quantidade: Number;
    foto: string;
    categoria?: Categorias| null;
}

export default Produtos;