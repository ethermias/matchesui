import { Tag } from "@/src/types/tag";
import TagItem from "./TagItem";

interface TagListProps {
  Tags: Tag[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TagList({
  Tags,
  onCompletedChange,
  onDelete,
}: TagListProps) {
  const TagsSorted = Tags.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {TagsSorted.map((Tag) => (
          <TagItem
            key={Tag.id}
            Tag={Tag}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {Tags.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          No Tags yet. Add a new one above.
        </p>
      )}
    </>
  );
}
