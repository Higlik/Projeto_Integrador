import Categorias from './Categorias'
import User from './User'

import User from'./User'

interface Produtos {
    id: Number;
    nome: string;
    valor: Number;
    descricao: string;
    quantidade: Number;
    foto: string;
    categoria?: Categorias| null;
<<<<<<< HEAD
    user?: User | null;
=======
    user?: User| null;

>>>>>>> 32d783894370cab4503d10ef55239ec0377c6314
}

export default Produtos;