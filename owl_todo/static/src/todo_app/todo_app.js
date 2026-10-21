import { Component, computed, proxy, signal, useEffect } from "@odoo/owl";
import { browser } from "@web/core/browser/browser";
import { registry } from "@web/core/registry";
import { ControlPanel } from "@web/search/control_panel/control_panel";
import { TodoInput } from "../todo_input/todo_input";
import { TodoList } from "../todo_list/todo_list";

const STORAGE_KEY = "owl_todo.todos";

export class TodoApp extends Component {
    static template = "owl_todo.TodoApp";
    static components = { ControlPanel, TodoInput, TodoList };

    // each todo: { id, title, done }
    todos = proxy(JSON.parse(browser.localStorage.getItem(STORAGE_KEY) || "[]"));
    // the todo whose title is in the input, undefined when adding a new one
    editingTodo = signal(undefined);
    // recomputed only when a todo is added, removed or toggled
    doneCount = computed(() => this.todos.filter((todo) => todo.done).length);

    setup() {
        // reads every todo, so it saves again each time one of them changes
        useEffect(() => {
            browser.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
        });
    }

    addTodo(title) {
        this.todos.push({ id: crypto.randomUUID(), title, done: false });
    }

    deleteTodo(id) {
        if (this.editingTodo()?.id === id) {
            this.stopEdit();
        }
        const index = this.todos.findIndex((todo) => todo.id === id);
        this.todos.splice(index, 1);
    }

    toggleTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
    }

    startEdit(id) {
        this.editingTodo.set(this.todos.find((todo) => todo.id === id));
    }

    editTodo(id, title) {
        const todo = this.todos.find((todo) => todo.id === id);
        todo.title = title;
        this.stopEdit();
    }

    stopEdit() {
        this.editingTodo.set(undefined);
    }
}

registry.category("actions").add("owl_todo.todo_app", TodoApp);
