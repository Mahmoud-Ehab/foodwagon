import { strings } from "@/app/strings"
import Image from "next/image"

export default function Middle() {
    return (
        <div className="flex justify-center items-center w-screen h-auto p-16 bg-secondary">
            <div className="grid grid-cols-3 divide-x-2 justify-center items-center w-auto p-8 bg-fill-light shadow-[0_15px_60px_-20px] shadow-primary-normal rounded-3xl">
                <div className="flex flex-row justify-center items-center p-4">
                    <Image 
                        src={"/icons/discount.svg"}
                        width={80}
                        height={80}
                        alt="icon"
                    />
                    <div className="flex flex-col text-3xl mx-8">
                        <span className="inline-block text-transparent bg-gradient-to-r from-special to-primary-dark bg-clip-text">{strings.daily}</span>
                        <span className="inline-block text-transparent bg-gradient-to-r from-special to-primary-dark bg-clip-text">{strings.discount}</span>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-4">
                    <Image 
                        src={"/icons/address.svg"}
                        width={80}
                        height={80}
                        alt="icon"
                    />
                    <div className="flex flex-col text-3xl mx-8">
                        <span className="inline-block text-transparent bg-gradient-to-r from-special to-primary-dark bg-clip-text">{strings.live}</span>
                        <span className="inline-block text-transparent bg-gradient-to-r from-special to-primary-dark bg-clip-text">{strings.tracing}</span>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-4">
                    <Image 
                        src={"/icons/clock.svg"}
                        width={80}
                        height={80}
                        alt="icon"
                    />
                    <div className="flex flex-col text-3xl mx-8">
                        <span className="inline-block text-transparent bg-gradient-to-r from-special to-primary-dark bg-clip-text">{strings.quick}</span>
                        <span className="inline-block text-transparent bg-gradient-to-r from-special to-primary-dark bg-clip-text">{strings.delivery}</span>
                    </div>
                </div>
            </div>   
        </div>   
    )
}