"use client";

import { useTransition } from "react";
import { DeleteProduct, ToggleProductAvailability } from "../../_actions/product";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function ActiveToggleDropdownMenu({
  id,
  isAvailableForPurchase,
}: {
  id: string;
  isAvailableForPurchase: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await ToggleProductAvailability(id, isAvailableForPurchase);
          router.refresh();
        });
      }}
    >
      {isAvailableForPurchase ? "Deactivate" : "Activate"}
    </DropdownMenuItem>
  );
}

export function DeleteDropdownItem({
    id,
    disabled,
  }: {
    id: string;
    disabled: boolean;
  }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
  
    return (
      <DropdownMenuItem
        disabled={disabled || isPending}
        onClick={() => {
          startTransition(async () => {
            await DeleteProduct(id);
            router.refresh();
          });
        }}
      >
        Delete
      </DropdownMenuItem>
    );
  }