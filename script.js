
let user_score =0 
let ai_score = 0

function userClick(choice){
    document.getElementById('user-choice').innerHTML = "You have chosen "+ choice

    let ai;

    let num = Math.floor(Math.random() * 100)
    if(num>0 && num<=33){
        ai="paper"
    }
    else if(num>33 && num<=66){
        ai="rock"
    }
    else{
        ai="scissor"
    }

    document.getElementById('ai-choice').innerHTML = "Computer has chosen "+ ai


    if(choice==ai){
        document.getElementById('result').innerHTML = "It's a draw"

        document.getElementById('user-score').innerHTML = "You: "+user_score
        document.getElementById('ai-score').innerHTML = "Computer: "+ai_score
    }
    else if((choice =="rock" && ai=="paper")|| (choice =="scissor" && ai=="rock")){
        ai_score++
        document.getElementById('result').innerHTML = "Computer has won"

        document.getElementById('user-score').innerHTML = "You: "+user_score
        document.getElementById('ai-score').innerHTML = "Computer: "+ai_score
    }

    else if((choice =="paper" && ai=="rock")||(choice=="scissor"&&ai=="paper")){
        user_score++
        document.getElementById('result').innerHTML = "You have won"

        document.getElementById('user-score').innerHTML = "You: "+user_score
        document.getElementById('ai-score').innerHTML = "Computer: "+ai_score
    }

    else if((choice=="rock"&& ai=="scissor")||(choice=="paper"&&ai=="rock")){
        user_score++
        document.getElementById('result').innerHTML = "You have won"

        document.getElementById('user-score').innerHTML = "You: "+user_score
        document.getElementById('ai-score').innerHTML = "Computer: "+ai_score
    }

    else if(choice=="paper" && ai=="scissor"){
        ai_score++
        document.getElementById('result').innerHTML = "Computer has won"

        document.getElementById('user-score').innerHTML = "You: "+user_score
        document.getElementById('ai-score').innerHTML = "Computer: "+ai_score
    }
}
