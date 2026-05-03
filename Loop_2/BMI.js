const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let bmi;
function BMI(weight, height){
    bmi = weight/(height**2)
    const result = bmi < 18.5 ? "Underweight" 
                 : bmi < 25 ? "Normal" 
                 : bmi < 30 ? "Overweight" 
                 : "Obese";
    console.log(result);
}

readline.question('Nhập cân nặng (kg): ', (weight)=>{
    readline.question('Nhập chiều cao (m): ', (height)=>{
        BMI(parseFloat(weight),parseFloat(height));
        readline.close();
    });
})
