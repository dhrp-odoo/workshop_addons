import { Component, t, useProps } from "@odoo/owl";

export class TodoList extends Component {
    static template = "owl_todo.TodoList";

    props = useProps({
        todos: t.array(
            t.object({ id: t.string(), title: t.string(), done: t.boolean() })
        ),
        onToggle: t.function(),
        onEdit: t.function(),
        onDelete: t.function(),
    });
}
