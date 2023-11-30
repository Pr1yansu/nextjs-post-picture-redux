"use client";
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

export type Photos = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

export type post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const LocalStorageSection = () => {
  const likedData = useAppSelector<post[]>(
    (state: RootState) => state.likedItems
  );
  const savedData = useAppSelector<Photos[]>(
    (state: RootState) => state.savedItems
  );
  const data = [...likedData, ...savedData];
  return (
    <div className="border-2 border-slate-300 rounded-md p-2 mt-4">
      {data ? (
        <div>
          <h1 className="font-semibold">Liked data :</h1>
          <ul className="pt-2">
            {likedData.length > 0 ? (
              likedData.map((item: post) => (
                <li key={item.id} className="py-1">
                  {item.title}
                </li>
              ))
            ) : (
              <li>no data in liked posts</li>
            )}
          </ul>
          <h1 className="font-semibold pt-2">Saved data :</h1>
          <ul className="pt-2">
            {savedData.length > 0 ? (
              savedData.map((item: Photos) => (
                <li className="py-1" key={item.id}>
                  {item.title}
                </li>
              ))
            ) : (
              <li>no data in saved photos</li>
            )}
          </ul>
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export default LocalStorageSection;
