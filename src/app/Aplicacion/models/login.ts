export interface Login {
  usuario:string;
  password: string;
  nombreCompleto?: string;
}


export interface Usuarios{
  id?: number;
  nombres?: string;
  apellidos?: string;
  identificacion?: string;
  rol?: string;
  estado?: string;
  telefono?: string;
  correo?: string;

}
