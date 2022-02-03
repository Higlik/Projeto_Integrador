import Categorias from './Categorias'
import User from'./User'

interface Produtos {
    id: Number;
    nome: string;
    valor: Number;
    descricao: string;
    quantidade: Number;
    foto: string;
    categoria?: Categorias| null;
    user?: User | null;

}
export default Produtos;