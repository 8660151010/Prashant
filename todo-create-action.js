export function saveTodos (todos) {
    return {
        type: 'TODO-CREATED',
        myNewToDo: todos
    }
};