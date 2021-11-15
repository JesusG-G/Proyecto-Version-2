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
    /*
    get GetNombres(){
        return this.Nombres;
    }
    set SetNombres(nombres:string){
        this.Nombres=nombres;
    }

    get GetApellidos(){
        return this.Apellidos;
    }
    set SetApellidos(apellidos:string){
        this.Apellidos=apellidos;
    }

    get GetCI(){
        return this.CI;
    }
    set SetCI(CI:string){
        this.CI=CI;
    }
    get GetContrasena(){
        return this.contrasena;
    }
    set SetContrasena(contrasena:string){
        this.contrasena=contrasena;
    }

    //CRUD

    public guardarUsuario(){

    }

    public obtenerUsuario(){

    }

    public actualizarUsuario(){

    }

    public eliminarUsuario(){

    }*/

}