import Button from "./Button";
export default function ProjectItem({ data, onEdit, onDelete }) {
  return (
    <li className="mb-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <div>
          <input type="radio" id={data.id} name="project" />
        </div>
      </div>
      <p>{data.description}</p>
    </li>
  );
}
