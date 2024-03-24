'use client'
import { useEffect, useState } from "react";
import { dummyData } from "../data/tags";
import { Tag } from "../types/tag";

export default function useTags() {
  const [Tags, setTags] = useState(() => {
    const savedTags: Tag[] = JSON.parse(
      localStorage.getItem("Tags") || "[]"
    );
    return savedTags.length > 0 ? savedTags : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("Tags", JSON.stringify(Tags));
  }, [Tags]);

  function setTagCompleted(id: number, completed: boolean) {
    setTags((prevTags) =>
      prevTags.map((Tag) => (Tag.id === id ? { ...Tag, completed } : Tag))
    );
  }

  function addTag(title: string) {
    setTags((prevTags) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTags,
    ]);
  }

  function deleteTag(id: number) {
    setTags((prevTags) => prevTags.filter((Tag) => Tag.id !== id));
  }

  function deleteAllCompletedTags() {
    setTags((prevTags) => prevTags.filter((Tag) => !Tag.completed));
  }

  return {
    Tags,
    setTagCompleted,
    addTag,
    deleteTag,
    deleteAllCompletedTags,
  };
}
