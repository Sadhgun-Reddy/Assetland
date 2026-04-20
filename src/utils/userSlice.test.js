import userReducer, { addUser, removeUser } from './userSlice';

describe('userSlice reducer', () => {
    const initialState = null;

    it('should return the initial state', () => {
        expect(userReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle addUser', () => {
        const user = { uid: '123', email: 'test@example.com', displayName: 'Test User' };
        const action = addUser(user);
        const newState = userReducer(initialState, action);
        expect(newState).toEqual(user);
    });

    it('should handle removeUser', () => {
        const currentState = { uid: '123', email: 'test@example.com', displayName: 'Test User' };
        const action = removeUser();
        const newState = userReducer(currentState, action);
        expect(newState).toBeNull();
    });
});
