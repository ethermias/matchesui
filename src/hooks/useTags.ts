'use client'
import { useEffect, useState } from "react";
import { dummyData } from "../data/tags";
import { Tag } from "../types/tag";

export default function useTags() {
  const [tags, setTags] = useState(() => {
    let savedTags: Tag[] = []
    if (typeof window !== 'undefined') {
      savedTags = JSON.parse(
      localStorage.getItem("tags") || "[]"
    );
    }
    return savedTags.length > 0 ? savedTags : dummyData;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("tags", JSON.stringify(tags)); 
    }
  }, [tags]);

  function setTagCompleted(id: number, completed: boolean) {
    setTags((prevTags) =>
      prevTags.map((tag) => (tag.id === id ? { ...tag, completed } : tag))
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
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  }

  function deleteAllCompletedTags() {
    setTags((prevTags) => prevTags.filter((tag) => !tag.completed));
  }

  return {
    tags,
    setTagCompleted,
    addTag,
    deleteTag,
    deleteAllCompletedTags,
  };
}
