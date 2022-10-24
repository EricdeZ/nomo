import {NextSeo} from "next-seo";
import Content from "../components/Content/Content"
import Buttons from "../components/Buttons/Buttons";
import Animations from "../components/Animations/Animations";

export default function Nomo() {
    return (
        <>
            <NextSeo
                title="Nomo"
                description="Landing"
            />
            <Content flex={true}>
                <Animations/>
            </Content>
        </>
    );
}
