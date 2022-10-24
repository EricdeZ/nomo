import {NextSeo} from "next-seo";
import Content from "../components/Content/Content"
import Card from "../components/Card/Card";

export default function Nomo() {
    return (
        <>
            <NextSeo
                title="Nomo"
                description="Landing"
            />
            <Content flex={true}>
                <Card/>
            </Content>
        </>
    );
}
