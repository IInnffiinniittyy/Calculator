    let keys = document.querySelectorAll(".box2>div");
    let bag="";
    for(let i = 0; i < keys.length; i++){
        keys[i].addEventListener("click", myCalculator);
    }
    function myCalculator(event){
        let targetNumber = event.target.innerText;
        if(targetNumber=="C"){
            bag="";
            document.querySelector("#main>div:first-child").innerText = "";
        }else if(targetNumber=="="){
            if(bag){
            
            document.querySelector("#main>div:first-child").innerText = eval(bag);
            }
         else{
            document.querySelector("#main>div:first-child").innerText = "";
            }
        }
        else{
        bag=bag+targetNumber;
        document.querySelector("#main>div:first-child").innerText=bag;
        }
       
    }