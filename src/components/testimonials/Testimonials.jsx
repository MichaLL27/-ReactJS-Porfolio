import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex nemo maxime consequuntur, illum reiciendis placeat incidunt voluptas     explicabo quia repudiandae eligendi? Maxime fuga autem molestias     excepturi reprehenderit. Commodi, ducimus.",
  },
  {
    avatar: AVTR2,
    name: "Shatta Male",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex nemo maxime consequuntur, illum reiciendis placeat incidunt voluptas     explicabo quia repudiandae eligendi? Maxime fuga autem molestias     excepturi reprehenderit. Commodi, ducimus.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex nemo maxime consequuntur, illum reiciendis placeat incidunt voluptas     explicabo quia repudiandae eligendi? Maxime fuga autem molestias     excepturi reprehenderit. Commodi, ducimus.",
  },
  {
    avatar: AVTR4,
    name: "Mana Ana McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex nemo maxime consequuntur, illum reiciendis placeat incidunt voluptas     explicabo quia repudiandae eligendi? Maxime fuga autem molestias     excepturi reprehenderit. Commodi, ducimus.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviw from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
