import { Component, onMounted, signal, t, useOnChange, useProps } from "@odoo/owl";

export class TodoInput extends Component {
    static template = "owl_todo.TodoInput";

    props = useProps({
        editingTodo: t.object().optional(),
        onAdd: t.function(),
        onSave: t.function(),
        onCancel: t.function(),
    });
    title = signal("");
    inputRef = signal.ref();

    setup() {
        onMounted(() => this.inputRef().focus());

        // fill the input with the title of the todo to edit, or empty it
        useOnChange(
            () => [this.props.editingTodo],
            (editingTodo) => this.title.set(editingTodo?.title ?? "")
        );
    }

    onSubmit() {
        const title = this.title().trim();
        if (title) {
            if (this.props.editingTodo) {
                this.props.onSave(this.props.editingTodo.id, title);
            } else {
                this.props.onAdd(title);
            }
            this.title.set("");
        }
    }
}
