import { Trash2 } from "lucide-react";
import { Tag } from "../../types/tag";

interface TagItemProps {
  tag: Tag;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TagItem({
  tag,
  onCompletedChange,
  onDelete,
}: TagItemProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          checked={tag.completed}
          onChange={(e) => onCompletedChange(tag.id, e.target.checked)}
          className="scale-125"
        />
        <span className={tag.completed ? "line-through text-gray-400" : ""}>
          {tag.title}
        </span>
      </label>
      <button onClick={() => onDelete(tag.id)} className="p-2">
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
