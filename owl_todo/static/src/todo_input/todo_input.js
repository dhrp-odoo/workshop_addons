import { Component, signal, t, useProps } from "@odoo/owl";

export class TodoInput extends Component {
    static template = "owl_todo.TodoInput";

    props = useProps({
        onAdd: t.function(),
    });
    title = signal("");

    onSubmit() {
        const title = this.title().trim();
        if (title) {
            this.props.onAdd(title);
            this.title.set("");
        }
    }
}
