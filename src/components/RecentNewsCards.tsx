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
        className=" grid grid-cols-1 items-center md:grid-cols-2 lg:max-w-4xl mx-auto  "
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
                <div className="flex max-w-lg pb-1.5 px-1.5 justify-center bg-money-green-complimentary rounded-lg m-1.5 md:my-2.5 lg: m-3 ">
                  <div className="flex flex-col text-center text-black ">
                    <h1 className="text-lg text-center font-medium mt-0.5 py-0.5">
                      {x?.title}
                    </h1>
                    <img
                      src={x?.image}
                      alt={"IMG"}
                      className="h-48 w-80 mx-auto mb-1"
                    />
                    <p className="w-80  text-left text-sm px-1 my-1">
                      {x?.description}
                    </p>

                    <a
                      href={x?.href}
                      className="my-2 mx-16 py-1 flex items-center justify-center  border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Learn More
                    </a>
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
