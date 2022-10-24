import {NextSeo} from "next-seo";
import Content from "../components/Content/Content"
import GradientBorder from "../components/GradientBorder/GradientBorder";

export default function Nomo() {
    return (
        <>
            <NextSeo
                title="Nomo"
                description="Landing"
            />
            <Content flex={true}>
                <GradientBorder>
                    <div style={{
                        background: '#252525',
                        height: '400px',
                        width: '400px'
                    }}/>
                </GradientBorder>
            </Content>
        </>
    );
}
