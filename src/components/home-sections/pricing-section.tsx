import PricingCard from "../pricing-card";

export default function PricingSection() {
  function handleBuy() {
    console.log("Buy");
  }
  return (
    <div className="flex flex-col py-5 md:px-10 lg:px-16 xl:px-20 gap-14 bg-primary">
      <h1 className="title text-white text-center">Choose your plan</h1>
      <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-5 lg:gap-10 xl:gap-16 align-middle px-6 md:px-0">
        <PricingCard
          planName="Free"
          planPrice={0}
          planPoints={[
            "Call to discuss your problems and goals",
            "Ask more about plans and packages",
          ]}
          buttonText="Start Now"
          svg="/images/pricing/left.svg"
          color="free"
          onClick={handleBuy}
        />
        <PricingCard
          planName="Basic"
          planPrice={80}
          planPoints={[
            "One Personalized meal for one month",
            "Motivation and support",
            "Grocery shopping guidance",
            "Evaluating food reports and pictures",
            "Answering your questions",
          ]}
          buttonText="Buy Now"
          svg="/images/pricing/middle.svg"
          color="basic"
          followUpPrice={40}
          onClick={handleBuy}
        />
        <PricingCard
          planName="Premium"
          planPrice={160}
          planPoints={[
            "Everything from basic plan",
            "Variety of meals and snacks for each day",
            "Specific to your health conditions and goals",
            "Daily follow up except for Sundays",
          ]}
          buttonText="Start Now"
          svg="/images/pricing/right.svg"
          color="premium"
          followUpPrice={40}
          onClick={handleBuy}
        />
      </div>
    </div>
  );
}
