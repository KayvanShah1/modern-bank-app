import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}>
      <div className="flex flex-row items-center px-4 py-[6px] rounded-[10px] mb-2 bg-discount-gradient">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 text-white font-poppins font-semibold ss:text-[72px] ss:leading=[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="flex-1 text-white font-poppins font-semibold ss:text-[72px] ss:leading=[100px] leading-[75px]">
        Payment Method.
      </h1>
    </div>
  </section>
);

export default Hero;
