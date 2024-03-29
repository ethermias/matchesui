'use client'

import AddTag from "../../components/tags/addTag1";
import useTags from "../..//hooks/useTags";
import TagList from "../../components/tags/tagList1";
import TagSummary from "../../components/tags/tagSummary1";

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
