"use client";

import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { XIcon } from "lucide-react";

export const InsufficientCreditsModal = () => {
  const router = useRouter();

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex-between">
            <p className="p-16-semibold text-dark-400 text-center">
              Insufficient Credits
            </p>
            <AlertDialogCancel
              className="border-0 p-0 hover:bg-transparent"
              onClick={() => router.push("/dashboard/profile")}
            >
              <XIcon />
            </AlertDialogCancel>
          </div>

          <AlertDialogTitle className="p-24-bold text-dark-600">
            Opps.. Seems you do not have more credits
          </AlertDialogTitle>

          <AlertDialogDescription className="p-16-regular py-3">
            Don't worry, you can get more credits by Proceed to next
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="button w-full bg-purple-100 text-dark-400 text-nowrap"
            onClick={() => router.push("/dashboard/profile")}
          >
            No, Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="button w-full bg-white text-black  bg-cover"
            onClick={() => router.push("/dashboard/credits")}
          >
            Yes, Proceed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
