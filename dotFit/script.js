const plans = [
    { day: "Monday", strength: "Chest and Triceps", cardio: "Running", flexibility: "Yoga" },
    { day: "Tuesday", strength: "Back and Biceps", cardio: "Cycling", flexibility: "Pilates" },
    { day: "Wednesday", strength: "Legs and Abs", cardio: "Swimming", flexibility: "Stretching" },
    { day: "Thursday", strength: "Shoulders and Core", cardio: "HIIT", flexibility: "Yoga" },
    { day: "Friday", strength: "Full Body", cardio: "Rowing", flexibility: "Pilates" },
    { day: "Saturday", strength: "Recovery", cardio: "Recovery", flexibility: "Recovery" },
    { day: "Sunday", strength: "Recovery", cardio: "Recovery", flexibility: "Recovery" }
];

let currentWeek = 1;
const totalWeeks = 24;
const cardioProgressElement = document.getElementById('cardioProgress');
const strengthProgressElement = document.getElementById('strengthProgress');
const flexibilityProgressElement = document.getElementById('flexibilityProgress');
const cardioPercentageElement = document.getElementById('cardioPercentage');
const strengthPercentageElement = document.getElementById('strengthPercentage');
const flexibilityPercentageElement = document.getElementById('flexibilityPercentage');

document.addEventListener('DOMContentLoaded', () => {
    const prevWeekButton = document.getElementById('prevWeek');
    const nextWeekButton = document.getElementById('nextWeek');
    const weekDisplay = document.getElementById('weekDisplay');
    const planTable = document.getElementById('planTable');

    function updateWeekDisplay() {
        weekDisplay.textContent = `Week ${currentWeek}`;
    }

    function updatePlanTable() {
        planTable.innerHTML = '';
        plans.forEach(plan => {
            const row = document.createElement('tr');
            const dayCell = document.createElement('td');
            const strengthCell = document.createElement('td');
            const cardioCell = document.createElement('td');
            const flexibilityCell = document.createElement('td');

            dayCell.textContent = plan.day;
            strengthCell.textContent = plan.strength;
            cardioCell.textContent = plan.cardio;
            flexibilityCell.textContent = plan.flexibility;

            dayCell.addEventListener('click', () => makeEditable(dayCell));
            strengthCell.addEventListener('click', () => makeEditable(strengthCell));
            cardioCell.addEventListener('click', () => makeEditable(cardioCell));
            flexibilityCell.addEventListener('click', () => makeEditable(flexibilityCell));

            row.appendChild(dayCell);
            row.appendChild(strengthCell);
            row.appendChild(cardioCell);
            row.appendChild(flexibilityCell);
            planTable.appendChild(row);
        });
    }

    function makeEditable(cell) {
        const originalText = cell.textContent;
        cell.innerHTML = `<input type="text" value="${originalText}">`;
        const input = cell.querySelector('input');
        input.focus();

        input.addEventListener('blur', () => {
            cell.textContent = input.value || originalText;
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                cell.textContent = input.value || originalText;
            }
        });
    }

    function updateProgressBars() {
        const progress = Math.min((currentWeek / totalWeeks) * 100, 100);
        cardioProgressElement.value = progress;
        strengthProgressElement.value = progress;
        flexibilityProgressElement.value = progress;

        cardioPercentageElement.textContent = `${Math.round(progress)}%`;
        strengthPercentageElement.textContent = `${Math.round(progress)}%`;
        flexibilityPercentageElement.textContent = `${Math.round(progress)}%`;
    }

    prevWeekButton.addEventListener('click', () => {
        if (currentWeek > 1) {
            currentWeek--;
            updateWeekDisplay();
            updatePlanTable();
            updateProgressBars();
        }
    });

    nextWeekButton.addEventListener('click', () => {
        if (currentWeek < totalWeeks) {
            currentWeek++;
            updateWeekDisplay();
            updatePlanTable();
            updateProgressBars();
        }
    });

    updateWeekDisplay();
    updatePlanTable();
    updateProgressBars();
});
