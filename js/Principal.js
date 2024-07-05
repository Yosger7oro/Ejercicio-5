/*En una empresa se asignará un aumento del 20% a todo el personal obrero 
y un 10% al personal administrativo. Se conoce de cada empleado su cédula, 
sueldo actual y el tipo de empleado (1-Obrero, 2-Administrativo). Al procesar
todos los empleados, la empresa desea saber: a) el nuevo sueldo de cada
empleado, por la empresa: b) el monto total que deberá pagar sólo por concepto 
de incremento de sueldo a todo el personal y c) el porcentaje de personal obrero.

Aclarando que la cédula 555 es de un administrativo con sueldo actual de 200, 
el 888 es obrero con sueldo actual de 500, el 777 administrativo con 400, 
el 666 es obrero con sueldo actual de 600, y el 444 es obrero con 800 

La empresa entrega la siguiente información como referencia del reporte de salida requerido: 
La cédula 555 tiene nuevo sueldo de $220 
La cédula 888 tiene nuevo sueldo de $600 
La cédula 777 tiene nuevo sueldo de $440 
La cédula 666 tiene nuevo sueldo de $720 
La cédula 444 tiene nuevo sueldo de $960  

Total a pagar sólo por aumento de sueldo: $440 Porcentaje de personal obrero: 60%  */

import CL_Empleado from "./CL_Empleado.js";
import CL_Empresa from "./CL_Empresa.js";

let emple1=new CL_Empleado(555,200,2);
let emple2=new CL_Empleado(888,500,1);
let emple3=new CL_Empleado(777,400,2);
let emple4=new CL_Empleado(666,600,1);
let emple5=new CL_Empleado(444,800,1);

let empresa=new CL_Empresa();

empresa.procesarempleado(emple1);
empresa.procesarempleado(emple2);
empresa.procesarempleado(emple3);
empresa.procesarempleado(emple4);
empresa.procesarempleado(emple5);

let salida=document.getElementById("salida");
salida.innerHTML="Reporte"
salida.innerHTML+="<br>El sueldo nuevo del empleado de cedula "+emple1.cedula+" es de: "+emple1.sueldoaumentado();
salida.innerHTML+="<br>El sueldo nuevo del empleado de cedula "+emple2.cedula+" es de: "+emple2.sueldoaumentado();
salida.innerHTML+="<br>El sueldo nuevo del empleado de cedula "+emple3.cedula+" es de: "+emple3.sueldoaumentado();
salida.innerHTML+="<br>El sueldo nuevo del empleado de cedula "+emple4.cedula+" es de: "+emple4.sueldoaumentado();
salida.innerHTML+="<br>El sueldo nuevo del empleado de cedula "+emple5.cedula+" es de: "+emple5.sueldoaumentado();
salida.innerHTML+="<br><br>"
salida.innerHTML+="<br>El monto que debe pagar la empresa por concepto de aumento de salario a todo el personal es de: "+empresa.acumaumento;
salida.innerHTML+="<br>El porcentaje de personal obrero es de: "+empresa.porcobreros();
