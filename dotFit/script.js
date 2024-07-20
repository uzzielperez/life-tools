const plans = [
    { day: "Monday", activity: "Workout: Chest and Triceps" },
    { day: "Tuesday", activity: "Workout: Back and Biceps" },
    { day: "Wednesday", activity: "Recovery: Yoga" },
    { day: "Thursday", activity: "Workout: Legs and Abs" },
    { day: "Friday", activity: "Workout: Shoulders and Core" },
    { day: "Saturday", activity: "Recovery: Rest" },
    { day: "Sunday", activity: "Recovery: Light Cardio" }
];

let currentWeek = 1;
const totalWeeks = 24;

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
            const activityCell = document.createElement('td');
            dayCell.textContent = plan.day;
            activityCell.textContent = plan.activity;
            row.appendChild(dayCell);
            row.appendChild(activityCell);
            planTable.appendChild(row);
        });
    }

    prevWeekButton.addEventListener('click', () => {
        if (currentWeek > 1) {
            currentWeek--;
            updateWeekDisplay();
            updatePlanTable();
        }
    });

    nextWeekButton.addEventListener('click', () => {
        if (currentWeek < totalWeeks) {
            currentWeek++;
            updateWeekDisplay();
            updatePlanTable();
        }
    });

    updateWeekDisplay();
    updatePlanTable();
});
