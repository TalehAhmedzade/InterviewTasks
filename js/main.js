// 1. Massivi tərsinə düzün. Massivi parametr kimi qəbul edən və tərs ardıcıllıqla yazılmış eyni elementlərdən ibarət massivi qaytaran reverseArray () funksiyasını yazın.
// const sentence = [`1`,`2`,`3`,`4`,`5`,`61232`];

// console.log(reverseArray(sentence));


// function reverseArray(array){
//     return array.reverse();
// }


// 2. Yadplanetliləri salamlayın. Sözlərdən ibarət massivi qəbul edən və konsolda hər bir yadplanetliyə salamlama çıxarmaq üçün dövrdən istifadə edən greetAliens () funksiyasını yazın. Salam belə bir formatda olmalıdır: "Oh powerful [name], we humans offer our unconditional surrender!”
// const aliens = [`Blorgous`, `Glamyx`, `Wegord`, `SpaceKing`];
// greetAliens(aliens);



// function greetAliens (arrayOfAliens){
//     let arr = arrayOfAliens;
//     arr.forEach(alien => {
//         console.log(`Oh powerful ${alien}, we humans offer our unconditional surrender!`)
//     });
// }



// 3.2 massivi parametr kimi qəbul edən və onların eyni dəyərli elementlərin konsola çıxaran justCoolStuff () funksiyasını yazın.

// const coolStuff = [
//     `gameboys`,
//     `skateboards`,
//     `backwards hats`,
//     `my room`,
//     `temporary tattoos`
//   ];
//   const myStuff = [
//     `sweaters`,
//     `skateboards`,
//     `family-night`,
//     `my room`,
//   ];
  
//   console.log(justCoolStuff(myStuff, coolStuff));

//   function justCoolStuff(firstArray,secondArray){
//     let equalValues = [];

//     myStuff.forEach((elementMyStuff)=>{
//         coolStuff.forEach((elementCoolStuff)=>{
//             if(elementCoolStuff === elementMyStuff) equalValues.push(elementCoolStuff);
//         })
//     })

//     return equalValues;
//   }




// 4. Parametr kimi {ad: “Yeməyin adı”, içərik: “bitki, ət və ya süd”} formatında yeməklər massivini qəbul edən və onların hamısının vegetarian olub-olmadığını müəyyən edən isTheDinnerVegan () funksiyasını yazın.

const meal = [
    { name: `arugula`, source: `plant` },
    { name: `tomatoes`, source: `plant` },
    { name: `lemon`, source: `plant` },
    { name: `olive oil`, source: `plant` },
  ];
  const dinner = [
    { name: `hamburger`, source: `meat` },
    { name: `cheese`, source: `dairy` },
    { name: `ketchup`, source: `plant` },
    { name: `bun`, source: `plant` }
  ];
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));

  function isTheDinnerVegan(feeds){
    let feedes = {...feeds}
    let counter = 0;
    for (const [key, value] of Object.entries(feedes)) {
        console.log(`${key}: ${value}`);
      }
      if(counter === 3) {return true;}
      else {return false;}

  }
  