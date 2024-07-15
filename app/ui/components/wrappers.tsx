import { DiscountInfo, ItemInfo } from "@/app/lib/definitions";
import { DiscountCard, ItemCard } from "./cards";

export function DiscountCardsWrapper({cards}: {cards: DiscountInfo[]}) {
    return (
        <div className="flex flex-col md:flex-row animate__animated animate__fadeInUp">
            {cards.map((card, i) => <DiscountCard key={i} card={card} />)}
        </div>
    );
}

export function ItemsWrapper({items}: {items: ItemInfo[]}) {
    return (
        <div className="relative carousel w-full px-16">
            {items.map((item, i) => 
            <div key={i} id={"slide"+i} className="carousel-item w-auto">
                <ItemCard item={item} />
            </div>
            )}
            <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={"#slide"} className="btn btn-circle bg-primary-dark hover:bg-primary-normal text-fill-light border-0">❮</a>
                <a href={"#slide2"} className="btn btn-circle bg-primary-dark hover:bg-primary-normal text-fill-light border-0">❯</a>
            </div>
        </div>
    );
}