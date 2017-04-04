export function saveTodos (todos) {
    return {
        type: 'TODO-CREATED',
        myNewToDo: todos
    }
};
export function removeTodos (todos) {
    return {
        type: 'TODO-REMOVED',
        updatedToDo: todos
    }
};