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
        <div className="flex flex-row items-center w-auto text-center">
            <button className="hidden md:inline-block btn btn-circle bg-primary-dark hover:bg-primary-normal text-fill-light border-0">❮</button>
            <div className="hidden md:flex flex-col md:flex-row w-full md:h-auto justify-center">
                {items.map((item, i) => 
                    <div key={i} id={"slide"+i} className="my-5 md:my-0">
                        <ItemCard item={item} />
                    </div>
                )}
            </div>
            <button className="hidden md:inline-block btn btn-circle bg-primary-dark hover:bg-primary-normal text-fill-light border-0">❯</button>

            <div className="md:hidden carousel carousel-vertical rounded-box h-96">
                {items.map((item, i) =>
                    <div className="carousel-item h-full">
                        <div key={i} id={"slide"+i}>
                            <ItemCard item={item} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}