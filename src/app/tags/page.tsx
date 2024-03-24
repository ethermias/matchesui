'use client'

import AddTag from "@/src/components/tags/AddTag";
import TagList from "@/src/components/tags/TagList";
import TagSummary from "@/src/components/tags/TagSummary";
import useTags from "@/src/hooks/useTags";

export default function Home() {
  const {
    Tags,
    addTag,
    setTagCompleted,
    deleteTag,
    deleteAllCompletedTags,
  } = useTags();
  return (
    <div>
     <div>
          <AddTag onSubmit={addTag} />
          <TagList
            Tags={Tags}
            onCompletedChange={setTagCompleted}
            onDelete={deleteTag}
          />
        </div>
      <TagSummary Tags={Tags} deleteAllCompleted={deleteAllCompletedTags} />
    </div>
  );
}
