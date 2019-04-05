import dispatcher from "../dispatcher";

export function createTodo(text){
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}

export function reloadTodos(){
// axios("htttp://someurl.com/somedataendpoint").then((data) => {
//      console.log("got the data!", data);
// });
    dispatcher.dispatch({type: "FETCH_TODOS"});
    setTimeout(() => {
        dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
                {
                    id: 21346413,
                    text: "Go Shopping Again!",
                    complete: false
                },
                {
                    id: 335684679,
                    text: "Sleep At the Yard.",
                    complete: true
                }
        ]});
    }, 1000);
}