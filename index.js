let count = 0;
let interval;

const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

// Initialize display
function updateDisplay() {
    countLabel.innerHTML = count;
}
updateDisplay();

// Repeat action while button is pressed/held
function startCounting(changeFn) {
    changeFn(); // Run immediately
    interval = setInterval(changeFn, 100); // Repeat
}

function stopCounting() {
    clearInterval(interval);
}

// Helpers for both mouse and touch events
function setupButtonHold(button, changeFn) {
    // Mouse Events
    button.addEventListener("mousedown", () => startCounting(changeFn));
    button.addEventListener("mouseup", stopCounting);
    button.addEventListener("mouseleave", stopCounting);

    // Touch Events
    button.addEventListener("touchstart", (e) => {
        e.preventDefault(); // prevent scroll on mobile
        startCounting(changeFn);
    });
    button.addEventListener("touchend", stopCounting);
}

// Set up Increase button
setupButtonHold(increaseBtn, () => {
    count++;
    updateDisplay();
});

// Set up Decrease button
setupButtonHold(decreaseBtn, () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

// Reset button (single click or tap)
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});



// let count = 0;
// let interval;

// const countLabel = document.getElementById("countLabel");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const resetBtn = document.getElementById("resetBtn");

// // Initialize display
// countLabel.innerHTML = count;

// // Update function
// function updateDisplay() {
//     countLabel.innerHTML = count;
//     decreaseBtn.disabled = count === 0;
// }

// // Repeating change while holding down
// function startCounting(changeFn) {
//     changeFn(); // Run once immediately
//     interval = setInterval(changeFn, 100); // Repeat every 100ms
// }

// function stopCounting() {
//     clearInterval(interval);
// }

// // Decrease on hold
// decreaseBtn.addEventListener("mousedown", () => {
//     startCounting(() => {
//         if (count > 0) {
//             count--;
//             updateDisplay();
//         }
//     });
// });
// decreaseBtn.addEventListener("mouseup", stopCounting);
// decreaseBtn.addEventListener("mouseleave", stopCounting);

// // Increase on hold
// increaseBtn.addEventListener("mousedown", () => {
//     startCounting(() => {
//         count++;
//         updateDisplay();
//     });
// });
// increaseBtn.addEventListener("mouseup", stopCounting);
// increaseBtn.addEventListener("mouseleave", stopCounting);

// // Reset on click
// resetBtn.onclick = function () {
//     count = 0;
//     updateDisplay();
// };






// let count = 0;

// document.getElementById("countLabel").innerHTML = count;

// document.getElementById("decreaseBtn").onclick = function(){
//     if (count > 0) {
//         count -= 1;
//         document.getElementById("countLabel").innerHTML = count;
//     }
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function(){
//     count +=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

