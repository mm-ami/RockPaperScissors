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

  

  //関数実行
  start();
};

game();