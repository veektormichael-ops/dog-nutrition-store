import eatingDog from "../assets/dog-eating.png";
import coco from "../assets/coco.png";

const Nutrition = () => {
  return (
    <div className="flex flex-col gap-20 py-[80px]">
      <div className="flex flex-col xl:flex-row items-center gap-12">
        <img
          src={eatingDog}
          alt="Dog eating food"
          className="w-full xl:w-[570px] h-auto object-contain"
        />
        <div className="flex flex-col gap-5 w-full xl:w-1/2">
          <h1 className="text-[32px] xl:text-[40px] inter-tight-600">
            Improve overall gastrointestinal health for better nutrient
            absorption
          </h1>
          <p className="inter-tight-400 text-[16px] xl:text-[18px]">
            Through rigorous scientific studies and consultations with
            veterinarians, we have created a breakthrough formula exclusively
            tailored to combat the health challenges prevalent in dogs. A
            staggering 91% of our customers have reported significant
            improvements in their dogs' health after incorporating our product
            into their diet.
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row-reverse items-center gap-12">
        <img
          src={coco}
          alt="Dog happy with food"
          className="w-full xl:w-[570px] h-auto object-contain"
        />
        <div className="flex flex-col gap-5 w-full xl:w-1/2">
          <h1 className="text-[32px] xl:text-[40px] inter-tight-600">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive
            health
          </h1>
          <p className="inter-tight-400 text-[16px] xl:text-[18px]">
            Our dog food formula contains carefully selected prebiotics that
            work in harmony with the gut microbiota, providing the necessary
            nutrients for the growth and maintenance of beneficial bacteria,
            ultimately supporting digestive health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;

