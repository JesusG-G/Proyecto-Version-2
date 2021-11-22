export class RegistroUsuario{
    public id: number;
    public Nombres: string;
    public Apellidos: string;
    public CI: string;
    public contrasena:string;
    constructor(id:number,Nombres:string,Apellidos:string,CI:string,contrasena:string){
        this.id=id;
        this.Nombres=Nombres;
        this.Apellidos=Apellidos;
        this.CI=CI;
        this.contrasena=contrasena;

    }
    

   

}