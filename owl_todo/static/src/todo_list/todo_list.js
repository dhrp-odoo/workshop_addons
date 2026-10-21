import { Component, usePlugin } from "@odoo/owl";
import { TodoPlugin } from "../todo_plugin/todo_plugin";

export class TodoList extends Component {
    static template = "owl_todo.TodoList";

    todoPlugin = usePlugin(TodoPlugin);
}
