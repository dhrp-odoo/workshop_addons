import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class TodoApp extends Component {
    static template = "owl_todo.TodoApp";
}

registry.category("actions").add("owl_todo.todo_app", TodoApp);
