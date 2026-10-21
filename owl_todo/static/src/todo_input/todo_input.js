import { Component, onMounted, signal, useOnChange, usePlugin } from "@odoo/owl";
import { TodoPlugin } from "../todo_plugin/todo_plugin";

export class TodoInput extends Component {
    static template = "owl_todo.TodoInput";

    todoPlugin = usePlugin(TodoPlugin);
    title = signal("");
    inputRef = signal.ref();

    setup() {
        onMounted(() => this.inputRef().focus());

        // fill the input with the title of the todo to edit, or empty it
        useOnChange(
            () => [this.todoPlugin.editingTodo()],
            (editingTodo) => this.title.set(editingTodo?.title ?? "")
        );
    }

    onSubmit() {
        const title = this.title().trim();
        if (title) {
            const editingTodo = this.todoPlugin.editingTodo();
            if (editingTodo) {
                this.todoPlugin.editTodo(editingTodo.id, title);
            } else {
                this.todoPlugin.addTodo(title);
            }
            this.title.set("");
        }
    }
}
