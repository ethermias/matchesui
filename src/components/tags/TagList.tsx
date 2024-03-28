import { Tag } from "@/src/types/tag";
import TagItem from "./tagItem";

interface TagListProps {
  tags: Tag[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TagList({
  tags,
  onCompletedChange,
  onDelete,
}: TagListProps) {
  const TagsSorted = tags.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {TagsSorted.map((tag) => (
          <TagItem
            key={tag.id}
            tag={tag}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {tags.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          No tags yet. Add a new one above.
        </p>
      )}
    </>
  );
}
