
export const Testimonials = () => {
  return (
    <div className="bg-neutral-100/80 py-10">
        <div >
          <div className="bg-white xl:max-w-7xl xl:mx-auto mx-5 md:py-32 py-10 overflow-hidden mask-l-from-90% mask-r-from-90%">
           <div className="flex flex-col items-center py-10">
             <h1 className="md:text-6xl text-2xl font-semibold">What Our Customers Say</h1>
             <p className="text-neutral-500 mt-5 md:text-xl text-[16px] text-center  w-[90%] mx-auto">Don't just take our word for it - hear from our satisfied customers</p>
           </div>

           <div className="inline-flex py-1 gap-4 mask-b-from-50%">
             <TestimonialCard
        name="Ayesha Khan"
        address="Srinagar, Kashmir"
        testimonial="The experience was amazing! The team made everything seamless and enjoyable."
      />
      <TestimonialCard
        name="Rohit Sharma"
        address="Delhi, India"
        testimonial="Excellent service! I’ll definitely recommend this to my friends."
      />
      <TestimonialCard
        name="Sara Mir"
        address="Gulmarg, Kashmir"
        testimonial="Truly memorable! The hospitality and attention to detail were top-notch."
      />
      <TestimonialCard
        name="Adil Ahmad"
        address="Kupwara, Kashmir"
        testimonial="Loved every moment! Highly professional and friendly team."
      />
      <TestimonialCard
        name="Mehreen Bhat"
        address="Pahalgam, Kashmir"
        testimonial="Fantastic experience from start to finish. Highly recommended!"
      />
       <TestimonialCard
        name="Ayesha Khan"
        address="Srinagar, Kashmir"
        testimonial="The experience was amazing! The team made everything seamless and enjoyable."
      />
      <TestimonialCard
        name="Rohit Sharma"
        address="Delhi, India"
        testimonial="Excellent service! I’ll definitely recommend this to my friends."
      />
      <TestimonialCard
        name="Sara Mir"
        address="Gulmarg, Kashmir"
        testimonial="Truly memorable! The hospitality and attention to detail were top-notch."
      />
      <TestimonialCard
        name="Adil Ahmad"
        address="Kupwara, Kashmir"
        testimonial="Loved every moment! Highly professional and friendly team."
      />
      <TestimonialCard
        name="Mehreen Bhat"
        address="Pahalgam, Kashmir"
        testimonial="Fantastic experience from start to finish. Highly recommended!"
      />
           </div>
        </div>
        </div>
    </div>
  )
}


type TestimonialCardProps = {
    name: string,
    address: string,
    testimonial: string
}
function TestimonialCard ({name, address, testimonial}: TestimonialCardProps) {
    return (
        <div className="bg-linear-to-b from-neutral-100 to-white shadow-[0px_-1px_1px_rgba(0,0,0,0.3)] p-5 w-[300px] h-[200px] rounded-xl">
                <div className="flex gap-5 items-center">
                    <img className="w-12 h-12 shadow-sm object-cover rounded-full object-top" src="https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?t=st=1762512633~exp=1762516233~hmac=d3e8f1f85fd0b3da2400dca1c9d73854d08a17c1f01d78f9320c2f35a5918cf8&w=1480" alt="avatar" />
                    <div className="flex flex-col items-start">
                        <h4 className="font-medium">{name}</h4>
                        <p className="text-sm text-neutral-500">{address}</p>
                    </div>
                </div>
                <p className="text-sm text-neutral-500 mt-3 font-light">{testimonial}</p>
            </div>
    )
}