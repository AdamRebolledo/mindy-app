export interface IMindyResponse {
  version: string;
  autor: string;
  codigo: string;
  nombre: string;
  unidad_medida: string;
  serie: ISerie[];
}

interface ISerie {
  fecha: string;
  valor: number;
}