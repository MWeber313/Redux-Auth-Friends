import {
FETCH_DATA_START, 
FETCH_DATA_SUCCESS, 
ADDING_FRIEND, 
ADDING_FRIEND_SUCCESS,
DELETE_FRIEND,
DELETE_FRIEND_SUCCESS,
EDIT_FRIEND,
EDIT_FRIEND_SUCCESS,
EDIT_FRIEND_TOGGLE,
} from "../actions";

const initalState = {
    error: "",
    fetchingData: false,
    friends: [],
    addingFriend: false,
    deletingFriend: false,
    editingFriend: false,
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_DATA_START: {
            return {
                ...state,
                fetchingData: true,
                error: "",
            };
        }
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                fetchingData: false,
                friends: action.payload
            }
        }
        case ADDING_FRIEND: {
            return {
                ...state,
                addingFriend: true,
            }
        }
        case ADDING_FRIEND_SUCCESS: {
            return {
                ...state,
                addingFriend: false,
                error: "",
                friends: action.payload,
            }
        }
        case DELETE_FRIEND: {
            return {
                ...state,
                deletingFriend: true,
            }
        }
        case DELETE_FRIEND_SUCCESS: {
            return {
                ...state,
                deletingFriend: false,
                friends: action.payload,
            }
        }
        case EDIT_FRIEND: {
            return {
                ...state,
                editingFriend: true,
            }
        }
        case EDIT_FRIEND_SUCCESS: {
            return {
                ...state,
                editingFriend: false,
                friends: action.payload
            }
        }
        case EDIT_FRIEND_TOGGLE: {
            return {
                ...state,
                editingFriend: true,
            }
        }
        default: 
            return state; 
    }
}

export default reducer;