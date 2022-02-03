import Categorias from './Categorias'
<<<<<<< HEAD:front end/delasartes/src/models/Produto.ts
=======
import User from './User'

<<<<<<< HEAD:front end/delasartes/src/models/Produtos.ts
=======
>>>>>>> 175d2a214eed4acdb2f17dfaa68d46898a9d665b:front end/delasartes/src/models/Produtos.ts
import User from'./User'

>>>>>>> f71d08f4dfbeab4d5e086a45c634f3dfcd211ca6:front end/delasartes/src/models/Produto.ts
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