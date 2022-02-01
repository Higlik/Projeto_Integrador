import Categorias from './Categorias'

interface Produto {
    id: number;
    nome: string;
    valor: number;
    descricao: string;
    quantidade: number;
    foto: string;
    categoria?: Categorias| null;
}

export default Produto;