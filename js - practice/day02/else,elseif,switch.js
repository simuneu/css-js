const score = 75;
    if(score >=90) {
        console.log("A+")
    }else if(score <90 && score >=80){
        console.log('A')
    }else if(score <80 && score>=70){
        console.log('B+')
    }else if (score <70 && score>=60) {
        console.log('B')
    }else{
        console.log('c')
    }

const score2 = 75;
    if(score2>=90) {
        console.log("A+")
    }else if(score2 >=80){
        console.log('A')
    }else if(score2>=70){
        console.log('B+')
    }else if (score2>=60) {
        console.log('B')
    }else{
        console.log('c')
    }

let value ='B';
    switch(value){
        case'A':
            console.log('A');
            break;
        case'B':
            console.log('B');
            break;
        case'C':
            console.log('C');    
            break;
    }

let value2 ='F';
    switch(value2){
        case'A':
            console.log('A');
            break;
        case'B':
            console.log('B');
            break;
        case'C':
            console.log('C');    
            break;
        default:
            console.log('일치하지 않음')
    }

let value3 ='F';
    switch(value3){
        default:
            console.log('일치하지 않음')
            break;
        case'A':
            console.log('A');
            break;
        case'B':
            console.log('B');
            break;
        case'C':
            console.log('C');    
            break;
    }