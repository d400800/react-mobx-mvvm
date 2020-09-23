import TodoUiStore from "../features/todos/stores/todo-ui-store";

export default async function mockTodosProvider() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve({
                data: [
                    new TodoUiStore({
                        data: {text: 'Study', id: 1, isDone: false},
                        uiData: {isEditing: false}
                    }),
                    new TodoUiStore({
                        data: {text: 'Rest', id: 2, isDone: false}
                    }),
                    new TodoUiStore({
                        data: {text: 'Workout', id: 3, isDone: false}
                    })
                ]
            });
        }, 2000);
    });
}