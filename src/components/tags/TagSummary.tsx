import { Tag } from "@/src/types/tag";

interface TagSummaryProps {
  Tags: Tag[];
  deleteAllCompleted: () => void;
}

export default function TagSummary({
  Tags,
  deleteAllCompleted,
}: TagSummaryProps) {
  const completedTags = Tags.filter((Tag) => Tag.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTags.length}/{Tags.length} Tags completed
      </p>
      {completedTags.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}
