import PageHeading from "@/components/shared/PageHeading";
import Plans from "@/components/shared/Plans";
import DollarIcon from "@/components/ui/DollarIcon";

const PlansPage = async () => {
  return (
    <>
      <PageHeading
        Icon={<DollarIcon />}
        badge="Flexible Pricing"
        title1="Choose Your"
        title2="Perfect Plan"
        description="Start with our free plan or unlock unlimited possibilities with
                premium credits. Scale as you grow."
      />

      <section className="py-20 px-6 bg-dark-light ">
        <Plans />
      </section>
    </>
  );
};

export default PlansPage;
