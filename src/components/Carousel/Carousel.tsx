import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Cwi from "../../assets/CWI.jpg";
import Riachuelo from "../../assets/riachuelo.png";
import CocaCola from "../../assets/CocaCola.png";
import PrivacyTools from "../../assets/PrivacyTools.jpg";
import ComplianceStation from "../../assets/ComplianceStation.jpg";

export default function Carousel() {
  const swiperRef = useRef<SwiperType>();

  return (
    <section className="carousel-hero">
      <h1 className="carrousel-title">Experiência profissional</h1>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={16}
            slidesPerView={1.2}
            autoplay={{
              delay: 300,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              400: {
                slidesPerView: 2.2,
              },
              600: {
                slidesPerView: 3.2,
              },
              1024: {
                slidesPerView: 4.2,
              },
            }}
          >
            <SwiperSlide>
              <div className="carousel-item">
                <img src={Cwi} alt="Cwi" className="cwi" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <img src={Riachuelo} alt="Riachuelo" className="rchlo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <img src={CocaCola} alt="CocaCola" className="CocaCola" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <img
                  src={PrivacyTools}
                  alt="PrivacyTools"
                  className="PrivacyTools"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <img
                  src={ComplianceStation}
                  alt="ComplianceStation"
                  className="ComplianceStation"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
