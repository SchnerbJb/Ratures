import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const StarRating = ({setParentRating} : {setParentRating: (param: number) => void}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    const handleClick = (index: number) => {
            setRating(index)
            setParentRating(index)
        }

    return (
        <div style={{ marginTop: 10, marginBottom: 10, fontSize: 25 }}>
            {[...Array(5)].map((_, index) => {
                index += 1;
                return (
                    <span
                        style={{
                            backgroundColor: "transparent", border: "none", outline: "none", cursor: "pointer", paddingLeft: 5,
                        }}
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <FontAwesomeIcon icon={index <= (hover || rating) ? faStar : faRegularStar} />
                    </span>
                );
            })}
        </div>
    )
}

export default StarRating;
