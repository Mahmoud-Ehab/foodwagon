import Image from "next/image";
import { DiscountInfo, ItemInfo } from "../../lib/definitions";
import { Source_Sans_400 } from "@/app/fonts";
import { strings } from "@/app/strings";
import { MapPinIcon } from '@heroicons/react/24/solid';

export function DiscountCard({card}: {card: DiscountInfo}) {
    return (
        <div className="w-72 mx-3 my-8 md:my-0">
            <figure className="relative rounded-xl overflow-hidden">
                <div className="absolute flex justify-center items-end px-4 bg-primary-dark text-fill-light bottom-0 rounded-tr-3xl">
                    <span className="text-6xl">{card.discount}</span>
                    <div className={`flex flex-col`}>
                        <span className="text-[32px] mb-[-18px]">%</span>
                        <span className={`${Source_Sans_400.className} text-[22px]`}>off</span>
                    </div>
                </div>
                <Image
                    className="w-full h-full"
                    src={card.img_url}
                    width={720}
                    height={720}
                    alt={card.item_name} 
                />
            </figure>
            <div className="mt-4">
                <h2 className="text-fill-dark my-2">{card.item_name}</h2>
                <div className="card-actions justify-start">
                    <h3 className="text-special bg-orange-100 py-1 px-3 rounded-md">
                        {card.remaining_days} {strings.discount_card_days}
                    </h3>
                </div>
            </div>
        </div>
    );
}


export function FeatureCard({
    img_url,
    head,
    body
}: {
    img_url: string,
    head: string,
    body: string
}) {
    return (
        <div className="flex flex-col justify-center items-center text-center w-72 p-8">
            <figure className="relative flex justify-center items-center w-48 h-48 mb-[-50px]">
                <Image
                    src={img_url}
                    alt={head} 
                    fill
                />
            </figure>
            <h2 className="text-lg text-fill-dark mt-8">{head}</h2>
            <span className={`${Source_Sans_400.className} card-actions justify-start text-gray-400`}>
                {body}
            </span>
        </div>
    );
}


export function ItemCard({item}: {item: ItemInfo}) {
    return (
        <div className="w-56 mx-3 overflow-hidden">
            <figure className="relative rounded-xl overflow-hidden">
                <Image
                    className="w-full h-full"
                    src={item.img_url}
                    width={720}
                    height={720}
                    alt={item.name} 
                />
            </figure>
            <div className="flex flex-col text-left py-4">
                <h2 className="text-fill-dark">{item.name}</h2>
                <div className={`${Source_Sans_400.className} flex flex-row items-center text-primary-dark`}>
                    <MapPinIcon className="translate-y-[-2px]" height={16}/>
                    <span className="ml-1">{item.address}</span>
                </div>
                <span className="text-fill-dark">
                    ${item.price.toFixed(2)}
                </span>
            </div>
            <button className="btn btn-wide w-full bg-special hover:bg-primary-dark text-fill-light border-0">
                {strings.order_now}
            </button>
        </div>
    );
}