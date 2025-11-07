import { Banner } from "../components/Home/Banner"
import { Cart } from "../components/Home/Cart"
import { Category } from "../components/Home/Category"
import { FeaturedProducts } from "../components/Home/FeaturedProducts"
import { Features } from "../components/Home/Features"
import { Hero } from "../components/Home/Hero"
import { Lower } from "../components/Home/Lower"
import { Testimonials } from "../components/Home/Testimonials"

export const Home = () => {
  return (
    <div className="pt-17">
      <Cart/>
      <Hero/>
      <Category/>
      <FeaturedProducts/>
      <Features/>
      <Testimonials/>
      <Lower/>
      <Banner/>
    </div>
  )
}
