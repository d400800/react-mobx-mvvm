import TodoItemViewModel from "../features/todos/stores/todo-item-view-model";

export default async function mockTodosProvider() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve({
                data: [
                    new TodoItemViewModel({
                        data: {text: 'Study', id: 1, isDone: false},
                        uiData: {isEditing: false}
                    }),
                    new TodoItemViewModel({
                        data: {text: 'Rest', id: 2, isDone: false}
                    }),
                    new TodoItemViewModel({
                        data: {text: 'Workout', id: 3, isDone: false}
                    })
                ]
            });
        }, 2000);
    });
}