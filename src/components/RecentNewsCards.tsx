import { useRef, useState } from "react";
import { newsCards } from "../sharedData/newsCards";
import { NewsCards } from "../../typings";
import { AnimatePresence, motion, useInView } from "framer-motion";

function RecentNewsCards() {
  const [news, setNews] = useState<Array<NewsCards>>(newsCards);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div
        ref={ref}
        className=" grid grid-cols-1 items-center md:grid-cols-2   space-y-10    "
      >
        <AnimatePresence>
          {isInView &&
            news.map((x) => (
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "perspective(600px) rotateX(0deg)",
                  color: "#fff",
                }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex mx-auto"
                key={x.id}
              >
                <div className="flex max-w-lg p-1 justify-center bg-money-green-complimentary rounded-lg ">
                  <div className="flex flex-col text-center text-black ">
                    <h1 className="text-lg text-center font-medium mt-0.5 py-0.5">
                      {x?.title}
                    </h1>
                    <img
                      src={x?.image}
                      alt={"IMG"}
                      className="h-48 w-80 mx-auto mb-1"
                    />
                    <p className="flex w-72 text-left text-sm px-1 my-1">
                      {x?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export default RecentNewsCards;
