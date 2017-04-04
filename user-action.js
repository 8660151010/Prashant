export function createUser (users) {
    return {
        type: 'USER-CREATED',
        newUser: users
    }
};
