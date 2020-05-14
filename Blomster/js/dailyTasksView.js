function updateViewDailyTasks() {
    document.getElementById('app').innerHTML = `
        <div class="date">
            <h3>${displayDate(model.selectedDate)}</h3>
        </div>
        <div class="actions">
            ${createActionsHtml()}
        </div>
    `;
}

function displayDate(dateIsoTxt) {
    return new Date(dateIsoTxt).toLocaleDateString();
}

function createActionsHtml() {
    const actions = model.actions;
    let html = '';
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const actionHtml = !action.isSelected ? '' : `
                    <div class="selectedRadio">
                    </div>                            
                    `;
        html += `
            <div class="action" onclick="selectAction(${i})">
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