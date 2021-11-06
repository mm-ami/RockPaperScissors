document.addEventListener('DOMContentLoaded', function() {
  const game = function() {
    const playBtn = document.querySelector('.intro button');
    const intro = document.querySelector('.intro');
    const introText = document.querySelector('.intro h1');
    const introBtn = document.querySelector('.intro button');
    const gameStart = document.querySelector('.game-start');
    const options = document.querySelectorAll('.select button');
    const Playerhand = document.querySelector('.player-hand');
    const Computerhand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');
    const PlayerScore = document.querySelector('.player-score p');
    const ComputerScore = document.querySelector('.computer-score p');
    const choice =  document.querySelector('.choice');
    const rock = document.querySelector('.rock');
    const scissors = document.querySelector('.scissors');
    const paper = document.querySelector('.paper');
    const hidden = document.querySelector('.hidden');
    const resetBtn = document.querySelector('.resetBtn');
  
    let pscore = 0;
    let cscore = 0;
  
    const start = () => {
      playBtn.addEventListener('click',() => {
        intro.classList.add('fadeOut');
        gameStart.classList.add('fadeIn');
      });
    };
  
    const Gamestr = () => {
      hands.forEach(hand => {
        hand.addEventListener('animationend',function() {
          this.style.animation = "";
        });
      });
  
      const rundom = ['グー','チョキ','パー'];
  
      options.forEach(option => {
        option.addEventListener('click', function(){
          const rundomOption = Math.floor(Math.random()*3);
          const computerChoice = rundom[rundomOption];
  
          setTimeout(() => {
            winlose(this.textContent,computerChoice);
            Playerhand.src = `./picture/${this.textContent}.png`;
            Computerhand.src = `./picture/${computerChoice}.png`;
  
            if(pscore === 5 || cscore === 5) {
              if(pscore === 5) {
                reset();
                introText.textContent = "あなたの勝ちです！";
              } else {
                reset();
                introText.textContent = "コンピュータの勝ちです！";
              }
            };
          },1000);
  
          Playerhand.style.animation = "shakePlayer 1s ease";
          Computerhand.style.animation = "shakeComputer 1s ease";
        });
      });
    };
  
    const updatescore = () => {
      PlayerScore.textContent = pscore;
      ComputerScore.textContent = cscore;
    };
  
    const reset = () => {
      intro.classList.add('fadeIn');
      gameStart.hidden = true;
      introBtn.textContent = 'もう一度やる';
      introText.style.color = "#272343"
      introBtn.addEventListener('click', () => {
        location.reload();
      });
    };
  
    const winlose = (playerChoice,computerChoice) => {
      if(playerChoice === computerChoice) {
        choice.textContent = 'あいこ';
        return;
      };
      if(playerChoice === 'グー') {
        if(computerChoice === 'チョキ') {
          choice.textContent = 'あなたの勝ち';
          pscore++;
          updatescore();
          return;
        } else {
          choice.textContent = 'コンピュータの勝ち';
          cscore++;
          updatescore();
          return;
        };
      }
      if(playerChoice === 'チョキ') {
        if(computerChoice === 'パー') {
          choice.textContent = 'あなたの勝ち';
          pscore++;
          updatescore();
          return;
        } else {
          choice.textContent = 'コンピュータの勝ち';
          cscore++;
          updatescore();
          return;
        };
      }
      if(playerChoice === 'パー') {
        if(computerChoice === 'グー') {
          choice.textContent = 'あなたの勝ち';
          pscore++;
          updatescore();
          return;
        } else {
          choice.textContent = 'コンピュータの勝ち';
          cscore++;
          updatescore();
          return;
        }
      }
    };
  
    Gamestr();
    start();
  }
  game();
});