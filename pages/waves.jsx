import {NextSeo} from "next-seo";
import Content from "../components/Content/Content"
import Waves from "../components/Waves/Waves";

export default function Nomo() {
    return (
        <>
            <NextSeo
                title="Nomo"
                description="Landing"
            />
            <Content>
                <Waves/>
            </Content>
        </>
    );
}
