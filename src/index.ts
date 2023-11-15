console.log("hello jcb, yuhu!");

const hero = document.querySelector('.hero') as HTMLDivElement;
const text = document.querySelector('h1') as HTMLHeadingElement;
// const maxWalk = 200;
const walk:number = 500; //px

function shadow(this: HTMLElement, e: MouseEvent):void {
    const { offsetWidth : width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    const { offsetTop, offsetLeft } = e.target as HTMLInputElement;

    // If mouse goes on a children element from the one listened it will restart coordinates inside that child element, it needs to be amended
    if (this !== e.target) {
        x = x + offsetLeft;
        y = y + offsetTop;
    };

    const xWalk = ((x / width * walk) - (walk / 2));
    const yWalk = ((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 red,
        ${xWalk * -0.5}px ${yWalk * -0.5}px 0 rgba(255, 0, 255, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
        ${xWalk}px ${yWalk * -1}px 0 rgba(0, 255, 0, 0.7),
        ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 0, 255, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);