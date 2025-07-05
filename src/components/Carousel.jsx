import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import productsData from "../data/productsData.json";

export default function Carousel() {
  const navigate = useNavigate();
  const data = productsData;

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px",
          }}
        />
      </div>
    );
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data.slice(0, 12)?.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
          >
            <div className="flex flex-col md:flex-row gap-10 xl:gap-20 justify-center h-[600px] items-center px-4 my-20 md:my-0">
              <div className=" space-y-4 md:space-y-6 md:w-[550px]">
                <h3 className="text-red-500">
                  Powering Your World With The Best in Electronics.
                </h3>
                <h1 className="text-white uppercase font-bold text-2xl md:text-4xl line-clamp-3">
                  {product.title}
                </h1>
                <p className="line-clamp-3 text-gray-300 pr-7">
                  {product.description}
                </p>
                <button className=" bg-gradient-to-r from-red-500 to-purple-600 text-white border-0 px-3 py-2 rounded-md text-xl font-medium  cursor-pointer outline-0">
                  Shop Now
                </button>
              </div>
              <div>
                <img
                  className="rounded-full w-[350px] h-[350px]  md:w-[550px] md:h-[550px] shadow-2xl shadow-red-400 transition-all hover:scale-105 duration-300 bg-white"
                  src={product.image}
                  alt={product.title}
                  onClick={() => navigate(`/products/${product.id}`)}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
