

export interface Tramite {
    id?:number,
    solicitante?:solicitante,
    tipo?:Solicitud,
    empresa?:string,
    RIF?:string,
    telf?:string,
    direccion?:Direccion,
    fecha:Fecha,
    organismo?:string,
    codigoLAE?:string,
    numero?:string,
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
    CheckBox_12?:any,
    CheckBox_13?:any,
    CheckBox_14?:any,
    CheckBox_15?:any,
    CheckBox_16?:any,
    CheckBox_17?:any


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

  export interface solicitud{
    Codigo?:string,
    Nombres?:string,
    Apellidos?:string,
    CI?:string,
    Nombre_Empresa?:string,
    RIF?:string,
    Telefono?:string,
    Urbanizacion?:string,
    Calle?:string,
    CasaLocalEdificio?:string,
    Dia?:string,
    Mes?:string,
    Ano?:string,
    organismo?:string,
    codigoLAE?:string,
    numero?:string,
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
    CheckBox_12?:any,
    CheckBox_13?:any,
    CheckBox_14?:any,
    CheckBox_15?:any,
    CheckBox_16?:any,
    CheckBox_17?:any
  }

  export interface Funcionario{
      Nombres?:string,
      Apellidos?:string,
      CI?:string
  }