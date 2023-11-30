"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchApiData } from "@/lib/functions/photoSlice";
import { DataTable } from "./photos/table";
import { columns } from "./photos/column";

const PhotoSection = () => {
  const dispatch = useAppDispatch();
  const photo = useAppSelector((state) => state.photo.data);
  const error = useAppSelector((state) => state.photo.error || null);
  const status = useAppSelector((state) => state.photo.status);
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  if (status === "loading") {
    return <div>loading...</div>;
  }
  const data = photo;
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

export default PhotoSection;
