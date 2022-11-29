import { Selecao } from "./selecao.model";

export interface Jogo {
  id?: number;
  selecaoA?: Selecao;
  selecaoB?: Selecao;
  selecaoAId?: number; 
  selecaoBId?: number; 
  placarSelecaoA?: number; 
  placarSelecaoB?: number; 
  criadoEm?: string;
}
