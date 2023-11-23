//Question 1
function calculateGrade(){
    var marks = document.getElementById("marks").value;
    var grade;

    if(marks >= 90 && marks <= 100){
        grade = "A";
    }

    else if(marks >= 85 && marks < 90){
        grade = "A-"
    }

    else if(marks >= 80 && marks < 85){
        grade = "B+"
    }

    else if(marks >= 75 && marks < 80){
        grade = "B"
    }

    else if(marks >= 70 && marks < 75){
        grade = "B-"
    }

    else if(marks >= 65 && marks < 70){
        grade = "C+"
    }
    else if(marks >= 60 && marks < 65){
        grade = "C"
    }

    else if(marks >= 55 && marks < 60){
        grade = "C-"
    }

    else if(marks >= 50 && marks < 55){
        grade = "D+"
    }

    else if(marks >= 45 && marks < 50){
        grade = "D"
    }

    else if(marks >=0 && marks < 45){
        grade = "F";
    }

    else{
        grade = "Invalid! Please Enter your marks to see the grade!"
    }
    
    document.getElementById("finalGrade").innerHTML = `Grade is <strong>${grade}</strong>`;
}

//Question 2
function calculateTotalElectricityBill(){
    var unit = parseInt(document.getElementById("electricityUses").value);
    var totalBill;
    
    if(unit <= 50){
        totalBill = unit * 0.5;
    }

    else if(unit > 50 && unit <= 150){
        totalBill = 25 + ((unit-50) * 0.75);
    }

    else if(unit > 150 && unit <= 250){
        totalBill = 25 + 75 + ((unit-150) * 1.2);
    }

    else{
        totalBill = 25 + 75 + 180 + ((unit-250) * 1.5);
    }

    document.getElementById("totalElectricityBill").innerHTML = `The Total Electricity Bill is <strong>${totalBill}</strong>`;
}

//Question 3
function calculateGrossSalaryOfEmployee(){
    var basicSalary = parseInt(document.getElementById("basicSalary").value);
    var HRA, DA, grossSalary;

    if(basicSalary <= 10000){
        HRA = basicSalary * 0.2;
        DA = basicSalary * 0.8;
    }
    
    else if(basicSalary > 10000 && basicSalary <= 20000){
        HRA = basicSalary * 0.25;
        DA = basicSalary * 0.9;
    }

    else{
        HRA = basicSalary * 0.3;
        DA = basicSalary * 0.95;
    }

    grossSalary = HRA + DA + basicSalary;

    document.getElementById("grossSalaryOfEmployee").innerHTML = `Tht Total Gross Salary of The Employee is <strong>${grossSalary}</strong>`;
}

//Question 4
function calculateSumOfNumbers(){
    var a, sum = 0;

    for(a = 400; a<= 450; a++ ){
        sum = sum + a;
    }

    document.getElementById("sumOfNumbers").innerHTML = `Sum of the numbers between 400 and 450 = <strong>${sum}</strong>`;
}

//Question 5
function calculateAverageOfEvenNumbers(){
    var b, sum = 0, counter = 0, avg;

    for(b = 500; b <= 565; b++){
        if(b%2 == 0){
            sum = sum + b;
            counter++;
        }
    }

    avg = sum / counter;

    document.getElementById("averageOfEvenNumbers").innerHTML = `The average of the even numbers between 500 and 565 = <strong>${avg}</strong>`;
}

//Question 6
function calculateAverageOfNumbersInArray(){
    var numArr = [43, 654, 34, 60, 532, 46, 300];
    var c, sum = 0, avg;

    for(c = 0; c<numArr.length; c++){
        sum = sum + numArr[c];
    }

    avg = sum / numArr.length;

    document.getElementById("averageOfNumbers").innerHTML = `The average of numbers in the numArr array = <strong>${avg}</strong>`;
}

//Question 7
function countNumbers(){
    var numArr = [434, 545, 231, 7675, 543, 678];
    var d, counter = 0;

    for(d = 0; d < numArr.length; d++){
        if(numArr[d] > 600){
            counter++;
        }
    }
    document.getElementById("countOfNumbers").innerHTML = `The count of numbers that are greater than 600 in the numArr array = <strong>${counter}</strong>`;
}

//Question 8
function calculateAverageOfAllMarksOfStudent(){
    var student = {
        name: "Rafsan Khan",
        age: 34,
        address: "House 432, Banani, Rd-11",
        Marks: [40, 33, 80, 93, 12, 46]
    };
    var k, sum = 0, avg;

    for(k = 0; k<student.Marks.length; k++){
        sum =  sum + student.Marks[k];
    }

    avg = sum / student.Marks.length;

    document.getElementById("averageOfMarks").innerHTML = `The average of all marks of the student <strong>${student.name}</strong> is <strong>${avg}</strong>`;
}

