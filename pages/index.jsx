import {NextSeo} from "next-seo";
import Content from "../components/Content/Content"
import Menu from "../components/Menu/Menu";

export default function Nomo() {
    return (
        <>
            <NextSeo
                title="Nomo"
                description="Landing"
            />
            <Content>
                <Menu/>
            </Content>
        </>
    );
}
