import { SelectedPage, type ClassType } from "../../shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "../../shared/Htext";
import Class from "../ourClasses/Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and muscle through structured lifting programs focused on proper form, progressive overload, and total-body power development.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Improve flexibility, balance, and mental clarity with guided yoga sessions designed to relax the mind while strengthening the body.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Target your core with intense workouts that strengthen abs, improve stability, and enhance overall athletic performance.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Experience high-energy functional workouts inspired by outdoor challenges that push your endurance, agility, and teamwork.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Dynamic full-body workouts combining cardio and strength training to help you burn calories and stay in peak condition.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Personalized and group training sessions focused on achieving specific fitness goals with expert coaching and structured plans.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText> OUR CLASSES </HText>
            <p className="py-5">
              Our gym classes are designed to challenge, motivate, and deliver
              real results, offering a mix of strength training, cardio, and
              functional workouts led by expert coaches to help you build power,
              endurance, and confidence at every fitness level. 💪
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-353px w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-2800px whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
