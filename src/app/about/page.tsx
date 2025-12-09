import styles from "./page.module.scss";

import HeroSection from "../../components/AboutUs/HeroSection/HeroSection";
import FeatureCards from "../../components/AboutUs/FeatureCards/FeatureCards";
import QuoteSection from "../../components/AboutUs/QuoteSection/QuoteSection";
import CoursesSection from "../../components/AboutUs/CoursesSection/CoursesSection";
import HowItWorks from "../../components/AboutUs/HowItWorks/HowItWorks";
import SubscribeSection from "../../components/AboutUs/SubscribeSection/SubscribeSection";
import FooterFeatures from "../../components/AboutUs/FooterFeatures/FooterFeatures";
import ProgramSearch from "../../components/Home/ProgramSearch/ProgramSearch";


export default function AboutPage() {
    return (
        <>
            <HeroSection />
            <FeatureCards />
            <QuoteSection />
            <CoursesSection />
            <HowItWorks />
            <SubscribeSection />
            <FooterFeatures />
            <ProgramSearch />
        </>
    );
}
