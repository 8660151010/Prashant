export default function (state = null, action) {
    switch (action.type) {
        case 'TODO-CREATED':
            return Object.assign({}, state, {ToDos: action.myNewToDo});
        case 'TODO-REMOVED':
            return Object.assign({}, state, {ToDos: action.updatedToDo});
        case 'USER-CREATED':
            return Object.assign({}, state, {Users: action.newUser});
    }
    return state;
}
