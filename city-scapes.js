const sun = document.querySelector(".sun");
const triggerDayNight = document.querySelector(".trigger_day-night");


sun.addEventListener('click', function () {
    // Toggle background color

    triggerDayNight.classList.toggle('section-night');
    sun.classList.toggle('moon');
});


console.log(sun);
console.log(triggerDayNight);


document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.querySelector('.avatar');
    const ground = document.querySelector('.ground-sphere'); // Select the ground container
    let positionX = 50;  // Initial X position
    let positionY = 50;  // Initial Y position (above ground)
    let velocityY = 0;     // Vertical velocity for jumping
    let gravity = 0.8;   // Gravity strength
    let isJumping = false; // Flag to track if the avatar is jumping
    const jumpSpeed = -12;    // Initial upward velocity for jump
    const moveSpeed = 5;    // Horizontal movement speed

    function updatePosition() {
        // Apply gravity
        velocityY += gravity;
        positionY += velocityY;

        // Ground collision detection
        if (positionY > ground.offsetTop - avatar.offsetHeight) {
            positionY = ground.offsetTop - avatar.offsetHeight;
            velocityY = 0;
            isJumping = false;
        }

        // Apply velocity
        avatar.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }

    function handleKeyDown(e) {
        switch (e.key) {
            case 'ArrowLeft':
                positionX -= moveSpeed;
                break;
            case 'ArrowRight':
                positionX += moveSpeed;
                break;
            case 'Space':
                if (!isJumping) {
                    velocityY = jumpSpeed;
                    isJumping = true;
                }
                break;
        }
        updatePosition();
    }

    function gameLoop() {
        updatePosition();
        requestAnimationFrame(gameLoop);
    }

    document.addEventListener('keydown', handleKeyDown);
    gameLoop(); // Start the animation loop
});