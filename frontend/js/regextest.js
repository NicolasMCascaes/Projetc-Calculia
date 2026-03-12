function testarRegex(expr){
    console.log("Expressão original: " + expr)

    expr = expr.replace(/,/g, ".")
  
    
    
     try {
        const resultado = eval(expr)
        console.log("resultado final: " + resultado) 
     } catch (error) {
        console.log("Error")
     }
}
testarRegex("√50+30")