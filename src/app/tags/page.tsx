'use client'

import AddTag from "@/src/components/tags/AddTag";
import TagList from "@/src/components/tags/TagList";
import TagSummary from "@/src/components/tags/TagSummary";
import useTags from "@/src/hooks/useTags";

export default function Home() {
  const {
    tags,
    addTag,
    setTagCompleted,
    deleteTag,
    deleteAllCompletedTags,
  } = useTags();
  return (
    <div>
     <div>
          <AddTag onSubmit={addTag} disabled={tags.length > 3}/>
          <TagList
            tags={tags}
            onCompletedChange={setTagCompleted}
            onDelete={deleteTag}
          />
        </div>
      <TagSummary tags={tags} deleteAllCompleted={deleteAllCompletedTags} />
    </div>
  );
}
