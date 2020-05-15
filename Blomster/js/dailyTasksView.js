function updateViewDailyTasks() {
    document.getElementById('app').innerHTML = `
        <div class="date">
            <h3>${displayDate(model.selectedDate)}</h3>
        </div>
        <div class="actions">
            ${createActionsHtml()}
        </div>
        <div class="flowerList">
            ${createFlowerListHtml()}
        </div>
    `;
}

function createFlowerListHtml() {
    const flowers = filterFlowersByDateAndTask();
    let html = '';
    for (let flower of flowers) {
        html += `<li>${flower.name}</li>`
    }
    return `
        <ul>
            ${html}
        </ul>
    `;
}

function filterFlowersByDateAndTask() {
    const flowers = [];
    for (let flower of model.flowers) {
        let tasks = getTasksOfCorrectType(flower);
        if (tasks.length === 0) continue;
        tasks = filterTasksForToday(tasks);
        if (tasks.length > 0) flowers.push(flower);
    }
    return flowers;
}

function filterTasksForToday(tasks) {
    const filteredTasks = [];
    for (let task of tasks) {
        const nextTaskDay = addDays(new Date(task.lastDate), task.frequencyDays);
        if (dateWithoutTime(nextTaskDay) === dateWithoutTime(new Date())) {
            filteredTasks.push(task);
        }
    }
    return filteredTasks;
}

function dateWithoutTime(date) {
    return date.toISOString().substr(0, 10);
}

function addDays(date, dayCount) {
    const millis = date.getTime() + dayCount * 1000 * 60 * 60 * 24;
    return new Date(millis);
}

function getTasksOfCorrectType(flower) {
    const action = model.selectedAction;
    if (action === 'all') return flower.tasks;
    const task = flower.tasks[action];
    return task ? [task] : [];
}


function displayDate(dateIsoTxt) {
    return new Date(dateIsoTxt).toLocaleDateString();
}

function createActionsHtml() {
    let html = '';
    for (let action of model.actions) {
        const actionHtml = action.id !== model.selectedAction ? '' : `
                    <div class="selectedRadio">
                    </div>                            
                    `;
        html += `
            <div class="action" onclick="selectAction('${action.id}')">
                <div class="radio">
                    ${actionHtml}
                </div>
                <div>
                    ${action.description}
                </div>
            </div>                    
        `;
    }
    return html;
}