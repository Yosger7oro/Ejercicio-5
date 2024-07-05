export default class CL_Empleado{
    constructor(ce,su,ti){
        this.cedula=ce;
        this.sueldo=su;
        this.tipo=ti;
    }
    set cedula(c){
        return this._cedula=+c;
    }
    get cedula(){
        return this._cedula;
    }

    set sueldo(s){
        return this._sueldo=+s;
    }
    get sueldo(){
        return this._sueldo;
    }

    set tipo(t){
        return this._tipo=+t;
    }
    get tipo(){
        return this._tipo;
    }

    aumento(){
        if(this.tipo===1){
            return (20/100)*this.sueldo;
        }else{
        return (10/100)*this.sueldo;
        }
    }

    sueldoaumentado(){
        return this.sueldo+this.aumento();
    }
}