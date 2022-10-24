import {NextSeo} from "next-seo";
import Content from "../components/Content/Content"
import Blobs from "../components/Blobs/Blobs";

export default function Nomo() {
    return (
        <>
            <NextSeo
                title="Nomo"
                description="Landing"
            />
            <Content flex={true}>
                <Blobs/>
            </Content>
        </>
    );
}
