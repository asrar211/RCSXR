import { Category } from "../components/Home/Category"
import { FeaturedProducts } from "../components/Home/FeaturedProducts"
import { Features } from "../components/Home/Features"
import { Hero } from "../components/Home/Hero"

export const Home = () => {
  return (
    <div className="pt-17">
      <Hero/>
      <Category/>
      <FeaturedProducts/>
      <Features/>
    </div>
  )
}
