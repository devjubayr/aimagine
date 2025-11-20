import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = ({ params: { type } }) => {
  const transformation = transformationTypes[type];
  return (
    <div>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
    </div>
  );
};
export default AddTransformationTypePage;
