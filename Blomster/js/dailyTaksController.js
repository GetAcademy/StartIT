function selectAction(index) {
    const actions = model.actions;
    for (let action of actions) {
        action.isSelected = false;
    }    
    actions[index].isSelected = true;
    updateView();
}




const filteredList = filterAbove18(list);