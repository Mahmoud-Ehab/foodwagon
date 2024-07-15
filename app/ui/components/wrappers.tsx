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
        <div className=" w-auto text-center">
            <div className="flex flex-col md:flex-row w-full justify-center">
                {items.map((item, i) => 
                <div key={i} id={"slide"+i} className="my-5 md:my-0">
                    <ItemCard item={item} />
                </div>
                )}
            </div>
        </div>
    );
}