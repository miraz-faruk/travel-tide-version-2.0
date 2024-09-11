import { useState } from "react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";


const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
                {/* Swiper Slides */}
                <SwiperSlide>
                    <img
                        src={`https://i.ibb.co/CJRvrqd/riashat-rafat-Ph5-VL5-Tilto-unsplash.jpg`}
                        alt="Slide 1"
                        className="w-full max-h-screen"
                    />
                    <p
                        className={`absolute bottom-16 lg:bottom-16 left-10 lg:left-10 text-xl lg:text-5xl text-white font-bold bg-white bg-opacity-10 py-2 rounded ${activeIndex === 0 ? 'animate__animated animate__bounceInUp' : ''
                            }`}
                    >
                        Endless Horizons, Endless Bliss
                    </p>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img
                        src={`https://i.ibb.co/8cQL4BS/harry-kessell-e-E2tr-Mn-6a0-unsplash.jpg`}
                        alt="Slide 2"
                        className="w-full max-h-screen"
                    />
                    <p
                        className={`absolute bottom-10 lg:bottom-32 left-8 lg:left-2/4 text-xl lg:text-4xl text-white font-bold bg-black bg-opacity-5 px-4 py-2 rounded ${activeIndex === 1 ? 'animate__animated animate__bounceInLeft' : ''
                            }`}
                    >
                        Discover Bali`s Sacred Beauty
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={`https://i.ibb.co/wcXJCSM/mamun-srizon-m-NVk2uup-Xs0-unsplash.jpg`}
                        alt="Slide 3"
                        className="w-full max-h-screen"
                    />
                    <p
                        className={`absolute bottom-5 lg:bottom-10 left-8 lg:left-32 text-xl lg:text-5xl text-white font-bold bg-white bg-opacity-5 px-4 py-2 rounded ${activeIndex === 2 ? 'animate__animated animate__backInDown' : ''
                            }`}
                    >
                        Lost in the Mangroves
                    </p>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Slider;