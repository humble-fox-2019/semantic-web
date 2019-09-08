const userScore = document.getElementById('userScore');
const compScore = document.getElementById('compScore');
const score = document.querySelector('.score');
const result = document.querySelector('.result > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const reset = document.getElementById('resetScore');
let user = 0;
let comp = 0;

function computerChoiche() {
    const choiches = ['r','p','s'];
    const randomNum = Math.floor(Math.random() * 3);
    return choiches[randomNum];
}

function convert(letter){
    if ( letter === 'r') return 'Rock';
    if ( letter === 'p') return 'Paper';
    return 'Scissors';
}

function draw(playerChoiche,computerChoiche){
    userScore.innerHTML = user;
    compScore.innerHTML = comp;
    result.innerHTML = `${convert(playerChoiche)} is friend of ${convert(computerChoiche)}, it's a draw!`;
    document.getElementById(playerChoiche).classList.add('whiteGlow');
    setTimeout(function(){document.getElementById(playerChoiche).classList.remove('whiteGlow') }, 500)
}

function win(playerChoiche,computerChoiche){
    user++
    userScore.innerHTML = user;
    compScore.innerHTML = comp;
    result.innerHTML = `${convert(playerChoiche)} beats ${convert(computerChoiche)}, you win!`;
    document.getElementById(playerChoiche).classList.add('greenGlow');
    setTimeout(function(){document.getElementById(playerChoiche).classList.remove('greenGlow') }, 500)
}

function lose(playerChoiche,computerChoiche){
    comp++
    userScore.innerHTML = user;
    compScore.innerHTML = comp;
    result.innerHTML = `${convert(playerChoiche)} is beaten by ${convert(computerChoiche)}, you suck!`;
    document.getElementById(playerChoiche).classList.add('redGlow');
    setTimeout(function(){document.getElementById(playerChoiche).classList.remove('redGlow') }, 500)
}

function game(playerChoiche){
    const compChoiche = computerChoiche();
    switch ( playerChoiche + compChoiche ){
        case 'rr':
        case 'pp':
        case 'ss':
          draw(playerChoiche, compChoiche);
          break;
        case 'rs':
        case 'sp':
        case 'pr':
           win(playerChoiche, compChoiche);
           break;
        case 'rp':
        case 'ps':
        case 'sr':
           lose(playerChoiche, compChoiche);
           break;
    }
}

function main() {
rock.addEventListener('click', function(){
    game('r');
})

paper.addEventListener('click', function(){
    game('p');
})

scissors.addEventListener('click', function(){
    game('s');
})

reset.addEventListener('click', function(){
    user = 0;
    comp = 0;
    userScore.innerHTML = user;
    compScore.innerHTML = comp;
    result.innerHTML = `Let's test your luck!`;
})
}

main();