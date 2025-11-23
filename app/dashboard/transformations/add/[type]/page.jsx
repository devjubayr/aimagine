import { getUserById } from "@/actions/user.actions";
import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({ params }) => {
  const { type } = await params;
  const { userId } = await auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect("sign-in");

  const user = await getUserById(userId);
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action={"Add"}
          userId={user._id}
          type={transformation.type}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};
export default AddTransformationTypePage;
