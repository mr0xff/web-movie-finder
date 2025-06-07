type Props = React.PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>;
import { motion } from "motion/react";

export function MotionDiv(props: Props){
  return(
    <motion.div
      animate={{
        x: [0, 100, 0],
        transition: { ease: ["easeIn", "easeOut"], duration: 1 }
      }} 
      className={props.className}
    >
      {props.children}
    </motion.div>
  ) 
}