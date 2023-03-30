


function allLongestString(array1) {
    console.warn("xin chao")
 
    let wordLength = 0;
    let longestWord= [];

    for(let i = 0; i < array1.length; i++){
      if(array1[i].length > wordLength){
      wordLength = array1[i].length
      
       }
         

       
    }

    
    for (let j = 0; j < array1.length; j++){
         
        if(array1[j].length == wordLength){
          longestWord.push(array1[j])
    }

   
    }
    console.log(longestWord)
}

allLongestString(["Minh","Trung","Hoang","Tien","Linh","Dung"]);


function sumAll(array2){
    let count = 0;
    let team1 = [];
    let team2 = [];
    let team1w = 0
    let team2w = 0
    let sum2t = []
    for (let i = 0; i < array2.length; i++){
    if ( i % 2 ==0){
        team1.push(array2[i])
    }
    if ( i % 2 != 0){
        team2.push(array2[i])
    }
    
}
    for ( let i = 0; i < team1.length; i++ ){
        team1w += team1[i]
    }
    for ( let j = 0; j < team2.length; j++){
        team2w+= team2[j]
    }
    sum2t.push(team1w)
    sum2t.push(team2w)
    console.log(sum2t)
}
sumAll([1,5,7,9,7,4,5])


function changeColor(){
    let a = Math.floor(Math.random() *16777215).toString(16)
    let color = ("#" + a)
    document.body.style.backgroundColor = color;
    document.getElementById("colorCode").innerHTML = a;
    
}


// function copyCode() {
//     var hex = getElementbyID(colorCode);
  
//     navigator.clipboard.writeText(colorCode);
    
//     alert("Copied the text: " + );
//   }

//   console.log (a)


