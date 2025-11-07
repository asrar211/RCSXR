import { IconCheckbox, IconClock, IconStar, IconTruckDelivery } from "@tabler/icons-react"

export const Features = () => {
  return (
    <div className="md:my-26 my-10">
        <div className="relative">
        <h1 className="text-center text-4xl font-semibold">Why Choose Us</h1>
        <div className="h-1 w-12 absolute left-1/2 -translate-x-1/2 bg-black rounded-full mt-2"></div>
        <p className="text-center text-neutral-500 font-light mt-8 w-[90%] mx-auto">We offer the best shopping experience with premium features</p>
        </div>

        <div className="max-w-7xl mx-auto mt-10 flex flex-wrap gap-4">
          <FeatureCard 
          title="Free Shipping" 
          description="Free shipping on all orders over $3000. Fast and reliable delivery to your doorstep."
          icon={<IconTruckDelivery size={30} stroke={1.2}/>}/>
          <FeatureCard 
          title="Secure Checkout" 
          description="Your payment information is always safe and secure with us. We use industry-leading encryption."
          icon={<IconCheckbox size={30} stroke={1.2}/>}/>
          <FeatureCard 
          title="24/7 Support" 
          description="Our customer support team is always available to help with any questions or concerns."
          icon={<IconClock size={30} stroke={1.2}/>}/>
          <FeatureCard 
          title="Quality Guarantee" 
          description="We stand behind the quality of every product we sell. 30-day money-back guarantee."
          icon={<IconStar size={30} stroke={1.2}/>}/>
        </div>
    </div>
  )
}

type FeatureCardProps = {
  title: string,
  description: string,
  icon: React.ReactNode
}
function FeatureCard ({title, icon, description}: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl sm:w-[280px] sm:h-[250px] w-[90%] mx-auto shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="flex flex-col gap-3">
              <span  className="rounded-full bg-neutral-200 p-2 w-fit">{icon}</span>
              <h4 className="text-[16px] font-medium">{title}</h4>
              <p className="text-neutral-500 font-light mt-2">{description}</p>
            </div>
          </div>
  )
}