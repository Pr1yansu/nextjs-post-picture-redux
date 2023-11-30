"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchPosts } from "@/lib/functions/postSlice";
import { DataTable } from "./posts/table";
import { columns } from "./posts/column";

const PostSection = () => {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.posts.data);
  const error = useAppSelector((state) => state.posts.error || null);
  const status = useAppSelector((state) => state.posts.status);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>loading...</div>;
  }
  const data = post;
  return (
    <>
      {data && (
        <div className="col-span-6">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </>
  );
};

export default PostSection;
