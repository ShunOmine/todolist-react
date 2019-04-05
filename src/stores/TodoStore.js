import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter{
    constructor() {
        super();
        this.todos = [
            {
                id: 11346413,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 23568479,
                text: "Pay Water Bills",
                complete: false
            },
        ]
    };
    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        });
        this.emit("change");
    }
    receiveTodos(todos){
        this.todos = todos;
        this.emit("change");
    }
    getAll(){
        return this.todos;
    }
    handleActions(action){
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
            case "RECEIVE_TODOS": {
                this.receiveTodos(action.todos);
            }
        }
    }
}

const todosStore = new TodoStore();
dispatcher.register(todosStore.handleActions.bind(todosStore));
window.dispatcher = dispatcher;
export default todosStore;