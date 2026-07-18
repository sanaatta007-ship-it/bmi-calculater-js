let heightinput=prompt("enter your weight (kg)");
let weightinput=prompt("enter your height (cm)");

if(heightinput===null||weightinput===null){
    
alert("invalid input")}

else {
    let height=Number(heightinput);
let weight=Number(weightinput);






 if(isNaN(weight)||isNaN(height)||height<=0||weight<=0){
    alert("invalid input (enter a positive number)."
    );
}
else{
    let BMI=weight/(height*height);//claculate BMI

console.log(`BMI:${BMI.toFixed(2)}`);
alert(`BMI:${BMI.toFixed(2)}`);
//define category
    if(BMI<18.5){

        console.log(" category:under weight")
        alert(" category: under weight")

    }
    else if(BMI>=18.5&&BMI<=24.9){
        console.log(" category:normal weight")
        alert(" category:normal weight")
    }
    else if (BMI>=25&&BMI<=29.9){
        console.log(" category:over weight")
        alert(" category:over weight")
    }
    else if(BMI>=30){
        console.log(" categorty:obese")
        alert(" category:obese");}




    }}
