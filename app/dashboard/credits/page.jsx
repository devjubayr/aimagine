import { getUserById } from "@/actions/user.actions";
import Header from "@/components/shared/Header";
import Plans from "@/components/shared/Plans";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Credits = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  return (
    <section className="sm:mt-12 ">
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <div className="mb-10" />

      <Plans />
    </section>
  );
};

export default Credits;
