import { Tag } from "@/src/types/tag";

interface TagSummaryProps {
  tags: Tag[];
  deleteAllCompleted: () => void;
}

export default function TagSummary({
  tags,
  deleteAllCompleted,
}: TagSummaryProps) {
  const completedTags = tags.filter((tag) => tag.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTags.length}/{tags.length} tags completed
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
