const char = document.querySelector('.character'),
block = document.querySelector('.block');

let movement = 100, counter = 0;


const moveLeft = ()=>{
    let left = parseInt(window.getComputedStyle(char).getPropertyValue('left'));
    if(left>0){
    left -= 100;
    char.style.left = `${left}px`
    }
};

document.addEventListener('animationiteration', ()=>{
    let index = Math.floor(Math.random() * 3);
    left = index * 100;
    block.style.left = left + 'px';
    counter++;
})

const moveRight = ()=>{
    let left = parseInt(window.getComputedStyle(char).getPropertyValue('left'));
    if(left<200){
    left += 100;
    char.style.left = `${left}px`
    }
};

document.addEventListener('keydown', e =>{
    if(e.key == 'ArrowLeft'){
        moveLeft();
    }else if(e.key == 'ArrowRight'){
        moveRight();
    }
});

    setInterval(()=>{
    let leftchar = parseInt(window.getComputedStyle(char).getPropertyValue('left'));
    let leftBlock = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let topBlock = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    if(leftchar == leftBlock && topBlock<600 && topBlock>410){
        alert('Game Over ' + counter);
        block.style.animation = 'none';
    }}, 1);

    document.querySelector('button').addEventListener('click', ()=>{
        block.style.animation = `train 0.7s infinite linear`;
        counter = 0;
    })

    document.querySelector('.left').addEventListener('touchstart', moveRight);
    document.querySelector('.right').addEventListener('touchstart', moveLeft);