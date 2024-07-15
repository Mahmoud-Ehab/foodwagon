import Image from "next/image"
import { Source_Sans_700, Source_Sans_400 } from "@/app/fonts";
import { strings } from "@/app/strings";
import { DiscountCardsWrapper } from "../components/wrappers";
import { discount_cards } from "@/app/lib/placeholders";

export default function header() {
    return (
        <div className={`${Source_Sans_700.className} flex flex-col w-screen h-screen overflow-hidden`}>
            <div className="flex justify-center items-center w-full h-14 bg-fill-light border-b-8 border-primary-dark">
                <Image 
                    className="animate__animated animate__bounce animate__delay-1s"
                    src={"/icons/hamburger.svg"}
                    width={25}
                    height={25}
                    alt={"icon image"}
                />
                <span className={`text-special text-xl ml-2 animate__animated animate__bounce animate__delay-1s`}>Food</span>
                <span className={`text-primary-normal text-xl animate__animated animate__bounce animate__delay-1s`}>wagon</span>
            </div>

            <div className="flex flex-1 flex-row w-full px-20 bg-gradient-to-b from-primary-normal to-primary-dark overflow-hidden">
                <div className="flex flex-1 justify-center items-center h-full">
                    <div className="ml-20 animate__animated animate__fadeInLeft">
                        <h1 className="text-fill-light text-[88px]">
                            {strings.header_title}
                        </h1>
                        <span className={`${Source_Sans_400.className} text-fill-dark text-[22px]`}>
                            {strings.header_subtitle}
                        </span>
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-end h-full overflow-hidden animate__animated animate__rotateInUpRight">
                    <Image 
                        className="drop-shadow-[-50px_20px_35px_rgba(0,0,0,0.25)]"
                        src={"/base-image.png"}
                        width={400}
                        height={400}
                        alt="base-image"
                    />
                </div>
            </div>

            <div className="flex flex-1 flex-row justify-center items-center w-full bg-fill-light">
                <DiscountCardsWrapper cards={discount_cards} />
            </div>
        </div>
    );
}