export default class CL_Empresa{
    constructor(){
        this.acumaumento=0;
        this.contpersonal=0;
        this.contobreros=0;
    }

    procesarempleado(e){
        this.acumaumento+=e.aumento();
        this.contpersonal++;
        
        if(e.tipo===1){
            this.contobreros++;
        }

    }

    porcobreros(){
        return (this.contobreros/this.contpersonal)*100;
    }
}