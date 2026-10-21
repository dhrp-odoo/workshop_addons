import { Component, providePlugins, usePlugin } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ControlPanel } from "@web/search/control_panel/control_panel";
import { TodoInput } from "../todo_input/todo_input";
import { TodoList } from "../todo_list/todo_list";
import { TodoPlugin } from "../todo_plugin/todo_plugin";

export class TodoApp extends Component {
    static template = "owl_todo.TodoApp";
    static components = { ControlPanel, TodoInput, TodoList };

    setup() {
        // one TodoPlugin for this screen, shared by every component inside it
        providePlugins([TodoPlugin]);
        this.todoPlugin = usePlugin(TodoPlugin);
    }
}

registry.category("actions").add("owl_todo.todo_app", TodoApp);
