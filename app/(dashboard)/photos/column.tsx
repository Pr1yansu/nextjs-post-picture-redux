"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/lib/hooks";
import { saveItem, unsaveItem } from "@/lib/functions/save";
import { toast } from "react-hot-toast";

export type Photos = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

const SaveButton = ({ row }: { row: Photos }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        const ref = dispatch(saveItem(row));
        console.log(ref);
      }}
    >
      Save
    </button>
  );
};

const UnsaveButton = ({ row }: { row: Photos }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        try {
          dispatch(unsaveItem(row));
          toast.success("Unsaved");
        } catch (error) {
          toast.error("not found");
        }
      }}
    >
      Unsave
    </button>
  );
};

export const columns: ColumnDef<Photos>[] = [
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    accessorKey: "thumbnailUrl",
    header: "Thumbnail",
    cell: (props) => {
      return (
        <div className="flex justify-center">
          <Image
            src={props.row.original.thumbnailUrl}
            alt="thumbnail"
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "save",
    header: "Save",
    cell: ({ row }) => {
      return <SaveButton row={row.original} />;
    },
  },
  {
    accessorKey: "unsave",
    header: "Unsave",
    cell: ({ row }) => {
      return <UnsaveButton row={row.original} />;
    },
  },
];
