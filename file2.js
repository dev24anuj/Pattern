function abc() 
{
    console.log("\nPattern 1");
    for (let i = 1; i <= 5; i++) {        
        let row = "";                     
        for (let j = 1; j <= i; j++) {    
            row += j;                     
        }
        console.log(row);
    }

    console.log("\nPattern 2");
    for (let i = 1; i <= 5; i++) {        
        let row = "";                     
        for (let j = 1; j <= i; j++) {    
            row += "*";                   
        }
        console.log(row);
    }

    console.log("\nPattern 3")
    for(i=0;i<=4;i++){
      let row=""
      for(j=0;j<=4;j++){
        row+="*"
      }
      console.log(row)
    }
    console.log("\nPattern 4")
    for(let i=1;i<=4;i++){
      let row =""
      for(let j=1;j<=i;j++){
        row+=i
      }
        console.log(row)
    }
    console.log("\nPattern 5")
     for (let i = 5; i >=1; i--) {        
        let row = "";                     
        for (let j = 1; j <= i; j++) {    
            row += "*";                   
        }
        console.log(row);
    }
    console.log("\nPattern 6");
    for (let i = 5; i >= 1; i--) {        
        let row = "";                     
        for (let j = 1; j <= i; j++) {    
            row += j;                     
        }
        console.log(row);
    }
    console.log("\npattern 7")
    let n=7
    for(i=0;i<n;i++){
        let row=""
    for(j=0;j<n-i-1;j++){
        row+=" "
    }
    for(j=0;j<2*i+1;j++){
        row+="*"
    }
    for(j=0;j<n-i-1;j++){
        row+=" "
    }
    console.log(row)
    }

}
module.exports = abc;

// i seh row ko dikhate hai or 1
//                             2
//                             3
//                             4
//                             5
// j seh column 1 2 3 4 5

