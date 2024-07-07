import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import { FaArrowDown } from "react-icons/fa";

const CARD_COLORS = ["#fff", "#fff", "#fff", "#fff"];
const CARD_IMAGES = ["../../../public/assets/recap/recap1.jpg", "../../../public/assets/recap/recap2.jpg", "../../../public/assets/recap/recap3.jpg", "../../../public/assets/recap/recap4.jpg"];
const CARD_TITLES = ["Green Day | 28 feb 2022", "Green Day | 28 feb 2022", "Green Day | 28 feb 2022", "Green Day | 28 feb 2022"]; // Tambahkan array judul kartu
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const Recap = () => {
    const initialCards = CARD_COLORS.map((color, index) => ({
        color,
        image: CARD_IMAGES[index],
        title: CARD_TITLES[index]
    }));
    const [cards, setCards] = React.useState(initialCards);

    const moveToEnd = from => {
        setCards(move(cards, from, cards.length - 1));
    };

    return (
        <div className="w-full ">
            <h1 className="section-tittle-light text-center mt-20">Recap event 2022</h1>
            <div style={wrapperStyle} className="container mb-32">
                <ul style={cardWrapStyle}>
                    {cards.map((card, index) => {
                        const canDrag = index === 0;
                        return (
                            <motion.li
                                key={card.color}
                                style={{
                                    ...cardStyle,
                                    backgroundColor: card.color,
                                    height: '100%',
                                    cursor: canDrag ? "grab" : "auto"
                                }}
                                animate={{
                                    top: index * -CARD_OFFSET,
                                    scale: 1 - index * SCALE_FACTOR,
                                    zIndex: CARD_COLORS.length - index
                                }}
                                drag={canDrag ? "y" : false}
                                dragConstraints={{
                                    top: 0,
                                    bottom: 0
                                }}
                                onDragEnd={() => moveToEnd(index)}
                            >
                                <img src={card.image} alt={`Card Image ${index}`} className="w-full h-[85%] object-cover rounded-2xl" />
                                <p className="section-parag-light text-center ">{card.title}</p>
                                <div className="w-full justify-center flex">
                                    <FaArrowDown className="animate-bounce w-5 h-4" />
                                </div>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
const wrapperStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
};

const cardWrapStyle = {
    position: "relative",
    width: "100%",
    height: "450px"
};

const cardStyle = {
    position: "absolute",
    width: "100%",
    height: "450px",
    borderRadius: "30px",
    transformOrigin: "top center",
    listStyle: "none"
};

export default Recap;