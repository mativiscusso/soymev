import React from "react";
import Layout from "../layout/Layout";
import TitlePage from "../components/TitlePage";
import CardPortfolio from "../components/CardPortfolio";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSpring, animated } from "react-spring";
import portfolio from "../utils/portfolio";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Portfolio = () => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

    return (
        <Layout>
            <animated.div style={animation}>
                <section id="portfolio">
                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={1}
                        breakpoints={{
                            375: {
                             width: 320,
                             slidesPerView: 1   
                            },
                            768: {
                             width: 768,
                             slidesPerView: 3   
                            },
                            1024: {
                             width: 1180,
                             slidesPerView: 5   
                            },
                            1390: {
                             width: 1520,
                             slidesPerView: 6   
                            },
                        }}
                    >
                        {portfolio.map((job) => (
                            <SwiperSlide className="card-portfolio">
                                <CardPortfolio
                                    title={job.name}
                                    url={job.url}
                                    image={job.image}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <TitlePage title="portfolio" />
                </section>
            </animated.div>
        </Layout>
    );
};

export default Portfolio;
