




import ImageBg from "./ImageBg";
import "../CSS/home.css";

import Categories from "./Categories";
import JoinUs from "./JoinUs";
import RankBox from "./RankBox";
import ReviewBox from "./ReviewBox";
import Footer from "./Footer"
function Home() {
    return (
        <>
            <ImageBg imgNum={0} />
            <Categories />
            <JoinUs color="#d3e2ff" />
            <RankBox />
            <ReviewBox />
            <Footer />
        </>
    )

}

export default Home;