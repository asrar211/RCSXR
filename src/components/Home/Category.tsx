
export const Category = () => {
  return (
    <div className="mt-32">
        <div className="relative">
        <h1 className="text-center text-4xl font-semibold">Shop By Category</h1>
        <div className="h-1 w-12 absolute left-1/2 -translate-x-1/2 bg-black rounded-full mt-2"></div>
        <p className="text-center text-neutral-500 font-light mt-8 w-[90%] mx-auto">Find the perfect attire for your needs from our curated collections</p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-wrap gap-5 my-10 justify-center items-center">
            <CategoryCard 
            categoryTitle="Top Wear"
            categoryLength="13 Products"
            categoryImage="https://img.freepik.com/free-photo/interior-kids-room-decoration-with-clothes_23-2149096039.jpg?t=st=1762334605~exp=1762338205~hmac=63aa4c3dedb89c201ed0f029f1f7776b0b2c7160f341268d4cd1cc1687fdb0ec&w=1480"/>
            <CategoryCard 
            categoryTitle="Bottom Wear"
            categoryLength="10 Products"
            categoryImage="https://img.freepik.com/premium-photo/high-angle-view-shorts-white-background_1048944-3686580.jpg?w=1480"/>
            <CategoryCard 
            categoryTitle="Accessories"
            categoryLength="16 Products"
            categoryImage="https://img.freepik.com/premium-photo/child-eyeglasses-pastel-background-optical-store-glasses-selection-kids_72402-5567.jpg?w=1480"/>
            <CategoryCard 
            categoryTitle="Blankets"
            categoryLength="6 Products"
            categoryImage="https://img.freepik.com/free-photo/close-up-boy-cuddled-blanket_23-2150814385.jpg?t=st=1762336041~exp=1762339641~hmac=9414de44e1e8dd85cd7b4b279c0daa12953023364e368633766d874c89c9c989&w=1480"/>
        
        </div>
    </div>
  )
}

type categoryProps = {
    categoryTitle: string,
    categoryLength: string,
    categoryImage: string
}
function CategoryCard({categoryTitle, categoryLength, categoryImage}: categoryProps) {
    return (
        <div className="rounded-xl shadow-md md:w-75 md:h-70 w-45 h-55 pb-5 group hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="w-full h-[80%] overflow-hidden rounded-t-xl">
                    <img className="w-full h-full object-cover rounded-t-xl group-hover:scale-105  mask-b-from-70% transition-all duration-300 ease-in-out" src={categoryImage} alt={categoryTitle} />
                </div>
                <div>
                <h4 className="pt-2 text-lg ml-5">{categoryTitle}</h4>
                <p className="text-sm text-neutral-500 ml-5 font-light pt-0.5">{categoryLength}</p>
                </div>
        </div>
    )
}