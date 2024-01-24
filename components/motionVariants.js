export const fadeSlideY = {
  initial: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      mass: 1,
    },
  },
};
