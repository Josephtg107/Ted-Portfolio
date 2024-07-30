import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Spline from "@splinetool/react-spline";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Work from "./work/page";
import ThreeDContent from "./threeD/page";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="text-accent">iOS Developer / Software Developer</h1>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">José Teodoro García</span>
            </h1>
            <p className="max-w-p[500px] mb-9 text-white/80">
              Passionate about building innovative iOS apps and exploring new tech. Fitness lover, gamer, and stream enthusiast.
            </p>
            {/* Buttons and Social Links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 h-16"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* text */}
          <div className="order-1 xl:order-non mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      {/* Add Services component here */}
      <Work /> 
    </section>
  );
};

export default Home;
