// src/utils/animations.js

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const buttonHover = {
  whileHover: {
    scale: 1.05,
    y: -3,
  },

  whileTap: {
    scale: 0.95,
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -8, 0],

    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const rotateAnimation = {
  animate: {
    rotate: 360,

    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const pageTransition = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },

  transition: {
    duration: 0.5,
  },
};