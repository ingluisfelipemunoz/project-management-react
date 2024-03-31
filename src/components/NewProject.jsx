import Input from "./Input";
import { useRef } from "react";
export default function NewProject({ onCancel, onSave }) {
  const form = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(form.current);
    const project = {
      title: data.get("title"),
      description: data.get("description"),
      dueDate: data.get("dueDate"),
    };
    //console.log("project", project);
    onSave(project);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <form ref={form}>
          <Input name="title" label="Title" />
          <Input name="description" label="Description" textarea />
          <Input name="dueDate" type="date" label="Due Date" />
        </form>
      </div>
    </div>
  );
}
