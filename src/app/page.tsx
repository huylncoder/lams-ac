import Banner from "../components/Home/Banner/Banner";
import AboutSection from "../components/Home/AboutSection/AboutSection";
import WhyChooseSection from "../components/Home/WhyChooseSection/WhyChooseSection";
import Blog from "../components/Home/Blog/Blog";
import ProgramSearch from "../components/Home/ProgramSearch/ProgramSearch";

export default function Home() {
    return (
        <main>
            <Banner />
            <AboutSection />
            <WhyChooseSection />
            <Blog/>
            <ProgramSearch/>
        </main>
    );
}
