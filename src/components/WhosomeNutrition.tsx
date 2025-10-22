import dog from "../assets/dog.jpg";
import Button from "./shared/Button";

const WholsomeNutrition = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-12 py-[80px]">
      <div className="flex flex-col gap-12 justify-between w-full xl:w-1/2">
        <div className="flex flex-col gap-8">
          <h1 className="text-[32px] xl:text-[40px] inter-tight-600">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h1>
          <p className="inter-tight-400 text-[16px] xl:text-[18px]">
            Invest in your dog's future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and the joy of a
            longer, healthier life.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-[19px] inter-tight-600">Key Points:</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 xl:gap-24 border-b border-[#E3E3E8] py-4">
              <div className="font-[700] text-[#EE6F4B] text-[28px] xl:text-[33px] inter-tight-700">97%</div>
              <div className="inter-tight-400 text-[14px] xl:text-[16px]">
                Dogs choose our dog food over leading brands because of its real
                functional ingredients and delicious flavor.
              </div>
            </div>

            <div className="flex gap-4 xl:gap-24 border-b border-[#E3E3E8] py-4">
              <div className="font-[700] text-[#EE6F4B] text-[28px] xl:text-[33px] inter-tight-700">84%</div>
              <div className="inter-tight-400 text-[14px] xl:text-[16px]">
                Our dog food provides superior nutrition and a patented
                probiotic for optimal nutrient absorption.
              </div>
            </div>

            <div className="flex gap-4 xl:gap-24 pt-4">
              <div className="font-[700] text-[#EE6F4B] text-[28px] xl:text-[33px] inter-tight-700">92%</div>
              <div className="inter-tight-400 text-[14px] xl:text-[16px]">
                Our dog food's high protein and fat digestibility contribute to
                ideal stool quality.
              </div>
            </div>
          </div>
        </div>

        <Button style={{ width: "100%" }}>
          Give your furry friend the gift of wholesome nutrition
        </Button>
      </div>

      <img
        src={dog}
        width={690}
        height={690}
        alt="Happy dog enjoying nutritious food"
        className="w-full xl:w-[690px] h-auto object-contain mx-auto"
      />
    </div>
  );
};

export default WholsomeNutrition;
