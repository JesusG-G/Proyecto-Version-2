

export interface Tramite {
    id?:number,
    solicitante:solicitante,
    tipo:Solicitud,
    empresa:string,
    RIF:string,
    telf:string,
    direccion:Direccion,
    fecha:Fecha,
    CheckBox_1?:any,
    CheckBox_2?:any,
    CheckBox_3?:any,
    CheckBox_4?:any,
    CheckBox_5?:any,
    CheckBox_6?:any,
    CheckBox_7?:any,
    CheckBox_8?:any,
    CheckBox_9?:any,
    CheckBox_10?:any,
    CheckBox_11?:any,
    CheckBox_12?:any


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