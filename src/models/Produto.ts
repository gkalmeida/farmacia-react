import Categoria from './Categoria';

export default interface Produto {
  id: number;
  principioAtivo: string;
  dosagem: string;
  descricao: string;
  categoria: Categoria | null;
}