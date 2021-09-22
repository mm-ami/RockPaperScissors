const game = function() {
  let pscore = 0;
  let cscore = 0;

  //じゃんけんスタートボタン押して、切り替わる
  const start = () => {
    const playBtn = document.querySelector('.intro button');
    const intro = document.querySelector('.intro')
    const gameStart = document.querySelector('.game-start');
    const Score = document.querySelector('.score');
    playBtn.addEventListener('click',() => {
      intro.classList.add('fadeOut');
      gameStart.classList.add('fadeIn');
      Score.classList.add('fadeIn');
    });
  };

  //判定にもとづいた画面表示
  const Gamestr = () => {
    const options = document.querySelectorAll('.select button');
    const Playerhand = document.querySelector('.player-hand');
    const Computerhand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend',function() {
        this.style.animation = "";
      });
    });

    const rundom = ['グー','チョキ','パー'];

    options.forEach(option => {
      option.addEventListener('click', function(){
        //コンピュータのランダム表示
        const rundomOption = Math.floor(Math.random()*3);
        const computerChoice = rundom[rundomOption];

        setTimeout(() => {
          computerchoice(this.textContent,computerChoice);

          Playerhand.src = `./picture/${this.textContent}.png`;
          Computerhand.src = `./picture/${computerChoice}.png`;
        },1000);

        Playerhand.style.animation = "shakePlayer 1s ease";
        Computerhand.style.animation = "shakeComputer 1s ease";
      });
    });
  }

  const updatescore = () => {
    const PlayerScore = document.querySelector('.player-score p');
    const ComputerScore = document.querySelector('.computer-score p');
    PlayerScore.textContent = pscore;
    ComputerScore.textContent = cscore;

    if(PlayerScore.textContent === 5) {
      choice.textContent = 'あなたの勝利！';
      return;
    } else if(ComputerScore.textContent === 5) {
      choice.textContent = 'コンピュータの勝利！';
      return;
    }
  }

  //じゃんけんの判定
  const computerchoice = (playerChoice,computerChoice) => {
    const choice =  document.querySelector('.choice');
    if(playerChoice === computerChoice) {
      choice.textContent = '引き分け';
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

    if(PlayerScore.textContent === 5) {
      choice.textContent = 'あなたの勝利！';
    } else if(ComputerScore.textContent === 5) {
      choice.textContent = 'コンピュータの勝利！';
    }
  };

  //関数実行
  start();
  Gamestr();
};

game();


//戻るボタンを押したら、数字がリセットされるようにする
