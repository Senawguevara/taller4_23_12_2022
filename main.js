addEventListener("DOMContentLoaded", (e)=>{


    for (let i = 1; i <1000; i++) {
    
            let  dinero= Number(prompt("cuanto dinero ingresa"));
        if(dinero >=400){
            let  nombre= prompt("¿cual es tu nombre?","");
    
    
            if (dinero >=400 && dinero<=900){
                alert("puede comprar 1: Bonais: $400"); 
            
            }else if(dinero >=400 && dinero<=1499){
                alert("puede comprar 1: Bonais: $400 o 2:Palito de helado de agua: $1.000 ");
                
            }else if(dinero >=400 && dinero<=1999){
                alert("puede comprar 1: Bonais: $400, 2: Palito de helado de agua: $1.000, 3: Bombón helado con arequipe: $1.500");
            }else if(dinero >=400 && dinero<=2199){
                alert("puede comprar 1: Bonais: $400, 2: Palito de helado de agua: $1.000, 3: Bombón helado con arequipe: $1.500, 4: Medio litro de helado: $ 2.000");
            }else if(dinero >=400 && dinero<=2499){
                alert("puede comprar 1: Bonais: $400, 2: Palito de helado de agua: $1.000, 3: Bombón helado con arequipe: $1.500, 4: Medio litro de helado: $ 2.000, 5: Palito de helado de crema: $2.200");
            }else if(dinero >=400 && dinero<=2799){
                alert("puede comprar 1: Bonais: $400, 2: Palito de helado de agua: $1.000, 3: Bombón helado con arequipe: $1.500, 4: Medio litro de helado: $ 2.000, 5: Palito de helado de crema: $2.200, 6: Bombón helado con chispas de chocolate: $2.500");
            }else if(dinero >=2800){
                alert("puede comprar 1: Bonais: $400 o 2: Palito de helado de agua: $1.000 o 3: Bombón helado con arequipe: $1.500 o 4: Medio litro de helado: $ 2.000  o 5: Palito de helado de crema: $2.200 o 6: Bombón helado con chispas de chocolate: $2.500, 7: Bombón helado con fresas: $2.800");
            }
                alert("recuerde no escribir el nombre solo el numero del producto")
                let  helado= Number(prompt("cual desea comprar"));
                let vueltos=0
    
                    switch(helado){
    
                    case 1:
                        vueltos=dinero-400;
                        alert("pedido #"+i+" el pedido de "+nombre+" es un bonais de $400 el cambio es:  $"+vueltos);
                        break;
                    case 2:
                        vueltos=dinero-1000;
                        alert("pedido #" +i+" el pedido de "+nombre+" es un palito de helado de agua de $1.000 el cambio es:  $"+vueltos);
                        break;
                    case 3:
                        vueltos=dinero-1500;
                        alert("el pedido de "+nombre+" es un Bombón helado con arequipe: $1.500 el cambio es:  $"+vueltos);
                        break;
                    case 4:
                        vueltos=dinero-2000;
                        alert("el pedido de "+nombre+" es  Medio litro de helado: $ 2.000 el cambio es:  $"+vueltos);
                        break;
                    case 5:
                        vueltos=dinero-2200;
                        alert("el pedido de "+nombre+" es un Palito de helado de crema: $2.200 el cambio es:  $"+vueltos);
                        break;
                    case 6:
                        vueltos=dinero-2500;
                        alert("el pedido de "+nombre+" es un Bombón helado con chispas de chocolate: $2.500 el cambio es:  $"+vueltos);
                        break; 
                    case 7:
                        vueltos=dinero-2800;
                        alert("el pedido de "+nombre+" es un Bombón helado con fresas: $2.800 el cambio es:  $"+vueltos);
                        break;    
                    }
        }else{
            alert("no alcaza para comprar nada")
        }
    }
    })