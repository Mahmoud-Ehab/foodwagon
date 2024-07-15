import { strings } from "@/app/strings";
import { FeatureCard } from "../components/cards";
import { ItemsWrapper } from "../components/wrappers";
import { items } from "@/app/lib/placeholders";

export default function Populars() {
    return (
        <div className="flex flex-col justify-center items-center text-center w-screen h-auto py-12 bg-gradient-to-b from-secondary to-fill-light">
            <div className="flex-1 pt-12">
                <h1 className="text-4xl text-special">
                    {strings.hdiw_title}
                </h1>
                <div className="flex flex-row">
                    <FeatureCard 
                        img_url="/icons/map-marker.svg"
                        head={strings.hdiw_item1_head}
                        body={strings.hdiw_item1_body}
                    />
                    <FeatureCard 
                        img_url="/icons/menu.svg"
                        head={strings.hdiw_item2_head}
                        body={strings.hdiw_item2_body}
                    />
                    <FeatureCard 
                        img_url="/icons/invoice.svg"
                        head={strings.hdiw_item3_head}
                        body={strings.hdiw_item3_body}
                    />
                    <FeatureCard 
                        img_url="/icons/donut.svg"
                        head={strings.hdiw_item4_head}
                        body={strings.hdiw_item4_body}
                    />
                </div>
            </div>

            <div className="flex-1 py-20">
                <h1 className="text-4xl text-fill-dark mb-12">
                    {strings.populars_title}
                </h1>
                <ItemsWrapper items={items} />
            </div>
        </div>
    );
}