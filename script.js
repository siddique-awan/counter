let titles = document.querySelectorAll(".title");
let emojis = ["🌙", "🥇", "🌟", "💗", "🛌"];
let i = 0;

titles.forEach((title, index) => {
    title.innerHTML += emojis[index];
});

let count = document.querySelectorAll('.count');
let incIcons = document.querySelectorAll(".add");
let decIcons = document.querySelectorAll(".sub");

let valVar = Array.from(count).map((_, index) => {
    return localStorage.getItem(`count_${index}`) || 0;
});

function updateCount(index, value) {
    valVar[index] = value;
    localStorage.setItem(`count_${index}`, value);
}

count.forEach((el, index) => {
    el.innerHTML = valVar[index];

    incIcons[index].addEventListener('click', () => {
        let newVal = parseInt(valVar[index]) + 1;
        updateCount(index, newVal);
        el.innerHTML = newVal;
    });

    decIcons[index].addEventListener('click', () => {
        if (valVar[index] > 0) {
            let newVal = parseInt(valVar[index]) - 1;
            updateCount(index, newVal);
            el.innerHTML = newVal;
        }
    });
});
