import { motion } from "framer-motion";

function LandingImage() {
  const BigImg = () => {
    return (
      <motion.img
        initial={{ opacity: 0, marginTop: -500 }}
        animate={{ opacity: 1, marginTop: 0, backgroundColor: "#5F8673" }}
        transition={{ duration: 2 }}
        src="/mh-full-logo.webp"
        alt={"PIC"}
      />
    );
  };

  return (
    <div className="flex">
      <BigImg />
    </div>
  );
}

export default LandingImage;
