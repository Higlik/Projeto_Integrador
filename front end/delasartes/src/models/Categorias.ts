import Produto from './Produto'

interface Categorias {
    id: number;
    genero: string;
    descricao: string;
    produto?: Produto | null
}

export default Categorias;