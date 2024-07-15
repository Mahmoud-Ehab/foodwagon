import Image from "next/image"
import { Source_Sans_400 } from "@/app/fonts"
import { strings } from "@/app/strings"

export default function Suggestions() {
    return (
        <div className="flex flex-col h-auto w-screen p-5 md:px-52 md:py-12 bg-fill-light">
            {/* ************** Sandwiches ************* */}
            <div className="flex flex-col md:flex-row-reverse w-full md:h-[50vh] my-12 rounded-2xl shadow-2xl overflow-hidden">
                <figure className="relative h-[50vh] w-full md:h-auto md:w-2/3">
                    <Image 
                        style={{objectFit: "cover"}}
                        src={"/suggestions/image2.png"}
                        alt="foog_suggestion"
                        fill
                    />
                </figure>
                <div className="flex flex-col justify-between md:w-1/3 p-12">
                    <div>
                        <h1 className="text-4xl text-fill-dark my-5">
                            {strings.best_deals} <span className="text-primary-dark">{strings.crispy}</span><br />
                            <span className="text-primary-dark">{strings.sandwiches}</span> 
                        </h1>
                        <p className={`${Source_Sans_400.className}`}>
                            {strings.sandwiches_phrase}
                        </p>
                    </div>
                    <button className="btn btn-wide w-full bg-gradient-to-r from-primary-normal from-10% to-primary-dark to-70% border-0 text-fill-light">
                        {strings.order_btn}
                    </button>
                </div>
            </div>

            {/* ************** Fried Chicken ************* */}
            <div className="flex flex-col md:flex-row w-full md:h-[50vh] my-12 rounded-2xl shadow-2xl overflow-hidden">
                <figure className="relative h-[50vh] w-full md:h-auto md:w-2/3">
                    <Image 
                        style={{objectFit: "cover"}}
                        src={"/suggestions/image1.png"}
                        alt="foog_suggestion"
                        fill
                    />
                </figure>
                <div className="flex flex-col justify-between md:w-1/3 p-12">
                    <div>
                        <h1 className="text-4xl text-fill-dark my-5">
                            {strings.chicken_title} <span className="text-primary-dark">{strings.fried}</span> <span className="text-primary-dark">{strings.chicken}</span> 
                        </h1>
                        <p className={`${Source_Sans_400.className}`}>
                            {strings.chicken_phrase}
                        </p>
                    </div>
                    <button className="btn btn-wide w-full bg-gradient-to-r from-primary-normal from-10% to-primary-dark to-70% border-0 text-fill-light">
                        {strings.order_btn}
                    </button>
                </div>
            </div>

            {/* ************** Pizza ************* */}
            <div className="flex flex-col md:flex-row-reverse w-full md:h-[50vh] my-12 rounded-2xl shadow-2xl overflow-hidden">
                <figure className="relative h-[50vh] w-full md:h-auto md:w-2/3">
                    <Image 
                        style={{objectFit: "cover"}}
                        src={"/suggestions/image3.png"}
                        alt="foog_suggestion"
                        fill
                    />
                </figure>
                <div className="flex flex-col justify-between md:w-1/3 p-12">
                    <div>
                        <h1 className="text-4xl text-fill-dark my-5">
                            {strings.pizza_title} <span className="text-primary-dark">{strings.pizza_qmark}</span>
                        </h1>
                        <p className={`${Source_Sans_400.className}`}>
                            {strings.pizza_phrase}
                        </p>
                    </div>
                    <button className="btn btn-wide w-full bg-gradient-to-r from-primary-normal from-10% to-primary-dark to-70% border-0 text-fill-light">
                        {strings.order_btn}
                    </button>
                </div>
            </div>

        </div>
    )
}