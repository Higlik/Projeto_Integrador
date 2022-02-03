import Categorias from './Categorias'
<<<<<<< HEAD:front end/delasartes/src/models/Produto.ts
=======
import User from './User'

>>>>>>> 175d2a214eed4acdb2f17dfaa68d46898a9d665b:front end/delasartes/src/models/Produtos.ts
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