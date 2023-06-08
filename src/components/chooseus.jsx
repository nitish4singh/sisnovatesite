import { features } from "../constants/index";
import { layout, styles1 } from "../styles";
import Button from "./Button";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className={`flex flex-row p-6 rounded-[20px] ${
          index !== features.length - 1 ? "mb-6" : "mb-0"
        } feature-card sisnovate-color1`}
      >
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles1.flexCenter} sisnovate-color1`}
        >
          <img
            src={icon}
            alt="star"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
            {title}
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
const ChooseUs = () => {
  return (
    <>
      <section id="features" className={layout.section}>
        <motion.div variants={textVariant()}>
          <div className={layout.sectionInfo}>
            <h2 className={styles1.heading2}>
              Give Your Business Idea, <br className="sm:block hidden" />
              we transform into Digital
            </h2>
            <p className={`${styles1.paragraph} max-w-[440px] mt-4`}>
              Sisnovate has a team that deals with the new technology ,
              Understand your business,analys your business then decides which
              technology will fit to enhance your traditional business into
              Digital business.
            </p>

          </div>
        </motion.div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};
export default SectionWrapper(ChooseUs, "");
