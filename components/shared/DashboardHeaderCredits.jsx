"use client";

import { UserModel } from "@/models/user.model";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

const DashboardHeaderCredits = () => {
  const { user } = useUser();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    (async function () {
      console.log(user);

      const userinfo = await UserModel.findById(user.userId);

      console.log(userinfo);

      setBalance(userinfo.creditBalance);
    })();
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
