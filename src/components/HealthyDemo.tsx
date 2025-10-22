import foodBowl from "../assets/food-bowl.jpg";
import food from "../assets/food.png";
import petBowl from "../assets/pet-bowl.png";
import petFood from "../assets/pet-food.png";
import vet from "../assets/vet.png";
import paypal from "../assets/paypal.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import applyPay from "../assets/pay.png";
import googlePay from "../assets/google-pay.png";

import shieldCheck from "../assets/shield-check.svg";
import Button from "./shared/Button";

const HealthyDemo = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="w-full xl:w-[55%] text-center text-[32px] xl:text-[40px] my-8 inter-tight-600">
          What makes us different makes them stronger
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-6">
        <div className="flex flex-col gap-20 justify-center w-full xl:w-[45%]">
          <div className="flex items-center gap-4">
            <img src={food} alt="Real Food" width={60} height={60} className="object-contain" />
            <div className="flex flex-col gap-2">
              <h3 className="text-[19px] inter-tight-600 font-semibold">Real Food</h3>
              <p className="inter-tight-400">Wholesome recipes for dogs with real meat and veggies.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={petBowl} alt="Premium Ingredient" width={60} height={60} className="object-contain" />
            <div className="flex flex-col gap-2">
              <h3 className="text-[19px] inter-tight-600 font-semibold">Premium Ingredient</h3>
              <p className="inter-tight-400">Elevating pet care with unmatched safety and quality.</p>
            </div>
          </div>
        </div>

        <img
          src={foodBowl}
          width={370}
          height={370}
          className="mx-auto md:mx-0 mb-8 md:mb-0 w-full md:w-[370px] h-auto"
        />

        <div className="flex flex-col gap-20 justify-center w-full xl:w-[45%]">
          <div className="flex items-center gap-4">
            <img src={petFood} alt="Made Fresh" width={60} height={60} className="object-contain" />
            <div className="flex flex-col gap-2">
              <h3 className="text-[19px] inter-tight-600 font-semibold">Made Fresh</h3>
              <p className="inter-tight-400">
                We prioritize maintaining the integrity of whole foods and nutrition.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <img src={vet} alt="Vet Developed" width={60} height={60} className="object-contain" />
            <div className="flex flex-col gap-2">
              <h3 className="text-[19px] inter-tight-600 font-semibold">Vet Developed</h3>
              <p className="inter-tight-400">
                We raise the bar for dog nutrition, surpassing industry expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button>Get your dog's healthy meal today!</Button>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 justify-center">
        <div className="flex gap-2 items-center">
          <img src={shieldCheck} width={16} height={16} alt="Guarantee"/>
          <p className="text-[13px] inter-tight-400">30-day money back guarantee</p>
        </div>
        <div className="flex gap-4">
          <img src={paypal} width={39} height={24} alt="PayPal"/>
          <img src={visa} width={39} height={24} alt="Visa"/>
          <img src={mastercard} width={39} height={24} alt="Mastercard"/>
          <img src={applyPay} width={39} height={24} alt="Apple Pay"/>
          <img src={googlePay} width={39} height={24} alt="Google Pay"/>
        </div>
      </div>
    </>
  );
};

export default HealthyDemo;
