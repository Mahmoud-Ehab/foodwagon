import { DiscountInfo, ItemInfo } from "./definitions";

export const discount_cards: Array<DiscountInfo> = [
    {
        img_url: "/discounts/image.png",
        item_name: "Greys Vage",
        remaining_days: 6,
        discount: 15
    },
    {
        img_url: "/discounts/image-1.png",
        item_name: "Greys Vage",
        remaining_days: 6,
        discount: 10
    },
    {
        img_url: "/discounts/image-2.png",
        item_name: "Greys Vage",
        remaining_days: 7,
        discount: 25
    },
    {
        img_url: "/discounts/image-3.png",
        item_name: "Greys Vage",
        remaining_days: 8,
        discount: 20
    },
]

export const items: Array<ItemInfo> = [
    {
        name: "Cheese Burger",
        address: "Burger Arena",
        price: 3.88,
        img_url: "/items/item1.png"
    },
    {
        name: "Toffe's Cake",
        address: "Top Sticks",
        price: 4.00,
        img_url: "/items/item2.png"
    },
    {
        name: "Dancake",
        address: "Cake World",
        price: 1.99,
        img_url: "/items/item3.png"
    },
    {
        name: "Crispy Sandwitch",
        address: "Fastfood Dine",
        price: 3.00,
        img_url: "/items/item4.png"
    },
    {
        name: "Thai Soup",
        address: "Foody man",
        price: 2.79,
        img_url: "/items/item5.png"
    },
]