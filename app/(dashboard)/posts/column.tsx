"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/lib/hooks";
import { dislikeItem, likeItem } from "@/lib/functions/like";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

export type post = {
  body: string;
  id: number;
  title: "string";
  userId: number;
};

const Like = ({ row }: { row: post }) => {
  const dispatch = useAppDispatch();
  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      onClick={() => {
        try {
          dispatch(likeItem(row));
          toast.success("Liked");
        } catch (error) {
          toast.error("not found");
        }
      }}
    >
      Like
    </Button>
  );
};

const Dislike = ({ row }: { row: post }) => {
  const dispatch = useAppDispatch();
  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      onClick={() => {
        try {
          dispatch(dislikeItem(row));
          toast.success("Disliked");
        } catch (error) {
          toast.error("not found");
        }
      }}
    >
      Dislike
    </Button>
  );
};

export const columns: ColumnDef<post>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <div className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[100px]">
          {row.original.body}
        </div>
      );
    },
  },
  {
    accessorKey: "body",
    header: "Body",
    cell: ({ row }) => {
      return (
        <div className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[100px]">
          {row.original.body}
        </div>
      );
    },
  },
  {
    accessorKey: "userId",
    header: "User Id",
  },
  {
    accessorKey: "like",
    header: "like",
    cell: ({ row }) => {
      return <Like row={row.original} />;
    },
  },
  {
    accessorKey: "dislike",
    header: "Dislike",
    cell: ({ row }) => {
      return <Dislike row={row.original} />;
    },
  },
];
