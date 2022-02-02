import Categorias from './Categorias'
<<<<<<< HEAD
import User from'./User'
=======
import User from './User'

>>>>>>> b5fd5bb6326044f52e0b01843ca5c1723ea8a13b
interface Produtos {
    id: Number;
    nome: string;
    valor: Number;
    descricao: string;
    quantidade: Number;
    foto: string;
    categoria?: Categorias| null;
<<<<<<< HEAD
    user?: User| null;
=======
    user?: User | null;
>>>>>>> b5fd5bb6326044f52e0b01843ca5c1723ea8a13b
}

export default Produtos;