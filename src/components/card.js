import React,  {useState } from "react";

function Card({ id, name, info, image, price, onDelete }) {
    const [seeOrNot, setSeeOrNot] = useState(false);

    const handleInfo = () => {
        setSeeOrNot(!seeOrNot);
    }

    return (
        <div className="card big-div" style={{ width: "18rem" }}>
            <div className="image-container">
                <div className="price-div">
                    <h6 className="price">${price}</h6>
                </div>
                <img src={image} className="card-img-top image-style" alt={name} />
            </div>
            <div className="card-body">
                <h5 className="card-title card-title text-center">{name}</h5>
                <p className="card-text card-info text-muted text-center">
                    {seeOrNot ? info : info.slice(0, 130) + "..."}{" "}
                    <button className="anchor" onClick={handleInfo}>
                        {seeOrNot ? "Show Less" : "Show More"}
                    </button>
                </p>
                <button className="btn btn-outline-success button-style" onClick={() => onDelete(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    )
}

export default Card;