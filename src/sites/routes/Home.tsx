import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";

import textList from "../../config/textList.ts";
import SmallBox from "../../components/boxes/SmallBox.tsx";

const Home = (): ReactNode => {
    return (
        <>
            <BigBox>
                <h1>{textList.info}</h1>
            </BigBox>
            <BigBox>
                <h1>{textList.shootingRanges}</h1>
            </BigBox>
            <BigBox>
                <h1>{textList.location}</h1>
            </BigBox>
            <SmallBox>
                <h1>{textList.trainingTime}</h1>
            </SmallBox>
        </>
    )
};

export default Home;