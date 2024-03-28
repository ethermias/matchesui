'use client'

import AddTag from "@/src/components/tags/addTag";
import TagList from "@/src/components/tags/tagList";
import TagSummary from "@/src/components/tags/tagSummary";
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
