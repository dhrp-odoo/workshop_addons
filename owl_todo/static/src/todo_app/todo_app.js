import { Component, proxy } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ControlPanel } from "@web/search/control_panel/control_panel";

export class TodoApp extends Component {
    static template = "owl_todo.TodoApp";
    static components = { ControlPanel };

    // each todo: { id, title, done }
    todos = proxy([]);

    addTodo(title) {
        this.todos.push({ id: crypto.randomUUID(), title, done: false });
    }

    deleteTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        this.todos.splice(index, 1);
    }

    toggleTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
    }

    editTodo(id, title) {
        const todo = this.todos.find((todo) => todo.id === id);
        todo.title = title;
    }
}

registry.category("actions").add("owl_todo.todo_app", TodoApp);
