/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package ejercicios_modulo;

import java.util.ArrayList;
import java.util.Arrays; 
import java.util.Scanner;
import java.util.Collections;
import java.util.List;
/**
 *
 * @author alejandrobazan
 */
public class main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
     /*   
        int vector[] = new int[10];
        Scanner teclado = new Scanner(System.in);
        
        for(int i=0 ;i<vector.length; i++ ){
            System.out.println("Ingresar un numero entero entre 1 y 100");
            vector[i]=teclado.nextInt();
        }
        System.out.println("Los numeros ingresados son: ");
        for(int i=0;i<vector.length; i++){
            
            System.out.println(vector[i]);
        }
        
     
        
        
        // En un vector de 15 posiciones se almacenan las edades de 15 alumnos. 
        //Se desea un programa que sea capaz de determinar cuál es la mayor edad y cuál es la menor edad que se encuentra entre los estudiantes.
        
        
        
        int vector [] = new int[15];
        vector[0]= 8;
        vector[1]= 3;
        vector[2]= 4;
        vector[3]= 5;
        vector[4]= 6;
        vector[5]= 7;
        vector[6]= 8;
        vector[7]= 8;
        vector[8]= 8;
        vector[9]= 9;
        vector[10]= 10;
        vector[11]= 11;
        vector[12]= 12;
        vector[13]= 12;
        vector[14]= 3;
       int max = 0;
       int min = vector[0];
        for(int i=0;i<vector.length;i++){
            if(vector[i]>max){
                max=vector[i];
            }
            if(vector[i]<min){
            min=vector[i];    
            }
            
        }
        System.out.println("La edad maxima es "+ max);
        System.out.println("La edad minima es "+ min);
        
        
        
        
        /*3.      Se tienen tres vectores.
        En el primero de ellos se guarda un número de dni,
        en el segundo un nombre
        y en el tercero un apellido. 
        Se desea un programa que sea capaz de recorrer los tres vectores AL MISMO TIEMPO y mostrar cada uno de estos datos por pantalla.
        Pista: tener en cuenta que el índice de cada vector es correspondiente al índice de los demás
        , es decir, los datos contenidos en el índice cero del vector de dni, 
        se corresponde con el índice cero del vector de nombres y el de apellidos.


        int dni [] = new int[5];
        String nombre[] = new String [5];
        String apellido [] = new String[5];
        
        
        dni[0]= 33333333;
        dni[1]= 44444444;
        dni[2]= 55555555;
        dni[3]= 66666666;
        dni[4]= 77777777;
        nombre[0] = "Ale";
        nombre[1] = "Naty";
        nombre[2] = "Diana";
        nombre[3] = "Rosa";
        nombre[4] = "Maria";
        apellido [0] = "Bazan";
        apellido [1] = "Gatti";
        apellido [2] = "Bazan";
        apellido [3] = "Yazlle";
        apellido [4] = "Lopez";
        
        
        for(int i=0; i<dni.length; i++){
            System.out.println("El dni es: "+ dni[i]+ " Nombre: "+ nombre[i]+" Apellido: "+ apellido[i] );
        }
        
        
         //En un vector de 23 posiciones se tienen las temperaturas máximas de las capitales de las 23 provincias argentinas
         //en el último mes. A partir de esta información, un noticiero desea determinar el top 5 de las temperaturas más altas
         //para poder mostrar en la pantalla de su programa,
         //para ello se necesita un programa que sea capaz de recorrer el vector de temperaturas, 
         //determinar las 5 más altas y copiarlas en un nuevo vector de 5 posiciones
        
        /*
        
        int temperatura []= {80,14,12,32,23,24,25,31,23,23,22,12,11,25,39,33,28,29,20,30,21,22,90};
        int uno= 0;
        int dos=0;
        int tres = 0;
        int cuatro = 0;
        int cinco = 0;
        int top[]= new int[5];
        
        Arrays.sort(temperatura);                                                                 
                                                                                             

            System.out.println(Arrays.toString(temperatura));
        
        for(int i= temperatura.length-1; i>0; i--){
            if (uno<temperatura[i]){
                uno = temperatura[i];
            }
            
            if (dos<temperatura[i] && uno>temperatura[i]){
                dos = temperatura[i];
            }
            if (tres<temperatura[i] && dos>temperatura[i]){
                tres= temperatura[i];
            }

              if (cuatro<temperatura[i] && tres>temperatura[i]){
              cuatro= temperatura[i];
            }
               if (cinco<temperatura[i] && cuatro>temperatura[i]){
                cinco= temperatura[i];
            }
                 
                  
        }
                        
         top[0]= uno;
         top[1]=dos;
         top[2]=tres;
         top[3]=cuatro;
         top[4]= cinco; 
                  
        
          System.out.println(Arrays.toString(top));  
        
        
        
//Se necesita un vector que permita cargar por teclado el nombre de 10 animales.
//A partir de esta carga, se desea otro vector que copie los mismos nombres pero en el orden inverso,
//es decir, si los nombres son: perro, gato, lagartija, 
//el nuevo vector debe contener: lagartija, gato, perro.
//Una vez realizado el cambio, mostrar por pantalla ambos vectores para compararlos.

String animales[] = new String[10];
Scanner teclado = new Scanner(System.in);
String reverse[]=new String[10];

for(int i=0; i< animales.length; i++){
    System.out.println("Ingrese el nombre de un animal: ");
    animales[i]=teclado.nextLine();
 
        
}
       System.out.println(Arrays.toString(animales));   
      
       
      
      for(int j= 0;j<reverse.length;j++){
        
          reverse[j]=animales[9-j];
}

        System.out.println(Arrays.toString(reverse));

*/
     
     
     
     //Matrices
     
     /*
     Una matriz de 5 filas x 3 columnas almacena el total de goles de 5 jugadores de futbol en los últimos 3 partidos
     que jugaron, donde cada fila representa a un jugador y cada columna a la cantidad de goles que hizo.
     Se necesita un programa que sea capaz de permitir la carga de los goles,
     calcular el promedio de goles realizado por cada jugador y 
     almacenar el resultado en un vector de 5 posiciones,
     donde cada posición representará a un jugador. Tener en cuenta el siguiente diagrama para llevar a cabo el planteo:
    Nota: tener en cuenta que el promedio de goles puede dar como resultado un número que NO SEA ENTERO.
     
     
           
     int estadisticas[][]=new int[5][3];
     Scanner teclado = new Scanner(System.in);
     Double promedio[] = new Double[5];
     Double count = 0.0;
     
     for(int f= 0; f<5;f++){
         System.out.println("Ingrese los goles del jugador "+ (f+1) +" :");
         for(int c = 0; c<3; c++){
             estadisticas[f][c]= teclado.nextInt();
             count = count+ estadisticas[f][c];
         }
         promedio[f]=count/3;
         count = 0.0;
     }
     
        System.out.println(Arrays.toString(promedio));
        
        */
        
   /*
Se desea un programa que sea capaz de rellenar completamente con números 1 una matriz de 4 x 4 
     a excepción de su diagonal principal, la cual debe ser rellenada con números 0. 
     Una vez realizada la carga, se desea mostrar la matriz de forma ordenada por pantalla. 
     Tener como ejemplo la matriz que se presenta a continuación. 
   
   
   int diagonal[][]= new int [4][4];
   for(int f = 0; f<4;f++){
       for(int c =0; c<4;c++){
           System.out.println(diagonal[f][c]);
           if(f == c){
               diagonal[f][c]= 0;
           }else{
               diagonal[f][c]=1;
           }
           
       }
       
   }
   
        System.out.println(Arrays.deepToString(diagonal));
       String nombre; 
    String especie;
    String sexo;
    String color;
    String pelaje;
    String raza;
  
   
   List <Mascota> listaMascotas = new ArrayList<Mascota>();
   listaMascotas.add(new Mascota("cacho","perro", "macho", "blanco","enrulado","caniche"));
   listaMascotas.add(new Mascota("chicha", "gato", "hembra", "negro", "lazio", "felino"));
        System.out.println(listaMascotas.get(0).getEspecie());
   
   for(Mascota masc:listaMascotas){
       System.out.println("Nombre:"+ masc.getNombre());
       System.out.println("Especie:"+ masc.getEspecie());
       System.out.println("Pelaje:"+ masc.getPelaje());
   }
        System.out.println(listaMascotas.get(1).getNombre());
        listaMascotas.get(1).setNombre("Ale");
        System.out.println(listaMascotas.get(1).getNombre());

 

   try{
       int edades[]={1,2,3,4};
       System.out.println("La edad de la posicion 4 es:"+ edades[8]);
   }
   catch(Exception e){
       System.out.println("Provocaste un error por desbordamiento");
       
   }
*/
   for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
        try {
            double division= 30/0;
            System.out.println(division);
        } catch (Exception e) {
            System.out.println("Asi no culiado");
        }
        

   
}
    
       
        
}
