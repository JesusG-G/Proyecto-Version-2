

export interface Tramite {
    id?:number,
    solicitante:solicitante,
    tipo:Solicitud,
    empresa:string,
    RIF:string,
    telf:string,
    direccion:Direccion,
    fecha:Fecha


}

export interface Direccion{
    urb:string,
    calle:string,
    caloed:string
}

export interface Solicitud{
    value:string,
    tipo:string
  }

  export interface Fecha{
      dia:string,
      mes:string,
      ano:string
  }

  export interface solicitante{
      Nombres:string,
      Apellidos:string,
      CI:string
  }