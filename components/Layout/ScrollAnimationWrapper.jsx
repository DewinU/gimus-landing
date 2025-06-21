import {motion} from "framer-motion";

export default function ScrollAnimationWrapper({children, className, ...props}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        once: true,
        amount: 0.3,
        margin: "-50px"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}