function getSelectedValue(){
    let selected = document.getElementById("selectValue").value
    console.log(selected)
}
function calculate(){
    let selected = document.getElementById("selectValue").value
    let firstNumber = document.getElementById("first").value
    let secondNumber = document.getElementById("second").value
    let svar = document.getElementById("svar")
    console.log(firstNumber.typeof) 

    switch(selected){
        case "+":            
        svar.innerText = eval(Number(firstNumber) + Number(secondNumber))
        break
        case "-":            
        svar.innerText = eval(Number(firstNumber) - Number(secondNumber))
        break
        case "*":            
            svar.innerText = eval(Number(firstNumber) * Number(secondNumber))
            break
            case "/":            
            svar.innerText = eval(Number(firstNumber) / Number(secondNumber))
            break            
        }
    }    
    function eraseContent(){
        let selected = document.getElementById("selectValue").value = "+"        
        let firstNumber = document.getElementById("first").value = ""                
        let secondNumber = document.getElementById("second").value = ""
        let svar = document.getElementById("svar").innerText = ""
}