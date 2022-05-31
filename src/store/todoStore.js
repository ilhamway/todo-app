import create from 'zustand';

const useTodoStore = create((set) => ({
    todos: [],
    doneTodos: [],
    undoneTodos: [],
    addTodo: (todo) => {
        set((state) => ({
            todos: [...state.todos, todo]
        }));
    },
    removeTodo: (index) => {
        set((state) => ({
                todos: state.todos.filter(todo => todo.id !== index) 
        }));
    },
    toggleTodo: (index) => {
        set((state) => ({
            todos: state.todos.map((todo) => {
                if(todo.id === index){
                    return { ...todo, isDone: !todo.isDone}
                }
                return todo;
            }),
        }));
    }
}))
// TODO: answer here

export default useTodoStore;