"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!promptId) return;

    const fetchPromptDetails = async () => {
      try {
        const response = await fetch(`/api/prompt/${promptId}`);
        if (!response.ok) throw new Error("Failed to fetch prompt details");

        const data = await response.json();
        setPost({ prompt: data.prompt, tag: data.tag });
      } catch (error) {
        console.error("Error fetching prompt details:", error);
      }
    };

    fetchPromptDetails();
  }, [promptId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!promptId) return alert("Prompt ID is missing!");

    setSubmitting(true);

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      if (!response.ok) throw new Error("Failed to update the prompt");

      router.push("/");
    } catch (error) {
      console.error("Error updating prompt:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={handleUpdate}
      />
    </Suspense>
  );
};

export default UpdatePrompt;
