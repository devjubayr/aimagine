import { getUserById } from "@/actions/user.actions";
import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { auth } from "@clerk/nextjs/server";

const AddTransformationTypePage = async ({ params }) => {
  const { type } = await params;
  const { userId } = await auth();
  const transformation = transformationTypes[type];

  const user = await getUserById(userId);
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <TransformationForm
        action={"Add"}
        userId={user._id}
        type={transformation.type}
        creditBalance={user.creditBalance}
      />
    </>
  );
};
export default AddTransformationTypePage;
