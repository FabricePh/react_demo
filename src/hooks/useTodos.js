import {useCallback, useReducer} from "react";

const ACTIONS = {
    REMOVE_TODO: 'REMOVE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED',
    TOGGLE_FILTER: 'TOGGLE_FILTER',
};

function todosReducer(state, action) {
    switch (action.type) {
        case ACTIONS.REMOVE_TODO :
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            }

        case ACTIONS.TOGGLE_TODO :
            return {
                ...state,
                todos: state.todos.map((todo) =>
                todo.id === action.payload.id
                    ? {...todo, checked: !todo.checked,}
                    : todo,
                ),
            }

        case ACTIONS.CLEAR_COMPLETED :
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.checked)
            }

        case ACTIONS.TOGGLE_FILTER :
            return {
                ...state,
                showCompleted: !state.showCompleted
            }
        default:
            console.error(`Unknown action type: ${action.type}`);
            return state;
    }
}

export function useTodos(todos) {
    const [state, dispatch] = useReducer(todosReducer, {
        showCompleted: true,
        todos
    });

    const visibleTodos = state.showCompleted
        ? state.todos
        : state.todos.filter(t => !t.checked)

    return {
        showCompleted: state.showCompleted,
        visibleTodos : visibleTodos,
        toggleTodo : useCallback((todo) => dispatch({type:ACTIONS.TOGGLE_TODO, payload:todo}), []),
        removeTodo : useCallback((todo) => dispatch({type:ACTIONS.REMOVE_TODO, payload:todo}), []),
        clearCompleted : useCallback(() => dispatch({type:ACTIONS.CLEAR_COMPLETED}), []),
        toggleFilter : useCallback(() => dispatch({type:ACTIONS.TOGGLE_FILTER}), []),
    }
}
