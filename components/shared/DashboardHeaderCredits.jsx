"use client";

import { getUserById } from "@/actions/user.actions";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

const DashboardHeaderCredits = () => {
  const { userId } = useAuth();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function loadCredits() {
      console.log({ userId });

      const user = await getUserById(userId);
      console.log({ user, userId });
    }

    loadCredits();
  }, []);

  return (
    <button className=" flex items-center gap-2 px-3 py-2 bg-dark rounded-xl transition-colors">
      <Image
        src="/assets/icons/coins.svg"
        alt="coins"
        width={20}
        height={20}
        className="size-4 md:size-6"
      />
      {balance}
    </button>
  );
};
export default DashboardHeaderCredits;
