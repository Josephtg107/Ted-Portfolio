import { animate, motion } from "framer-motion";



// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
        {/* Render 6 motion divs, each representing a step of the stairs.
        
        Each div will have the same animation defined by the stairsAnimation object.
        The delay for each div is calculated dynamically based on its reversed index,
        creating a staggered effect with decreasing delay for each subsequent step.
        
        */}
        {[...Array(6)].map((_, index) => {
            return (
            <motion.div
            key={index}
            initial="initial"
            animate="animate"
            exit="exit"

            className="h-full w-full bg-white relative"
            />
        );
        })}
    </>
    );
};

export default Stairs