import React from "react";

const CardTitle = ({ title }) => {
    const maxLength = 50;
    const ellipsis = "...";
    if (title.length <= maxLength) {
        return (
            <div>
                <h2 className="card__title">{title}</h2>
            </div>
        );
    } else {
        const croppedTitle = title.substring(0, maxLength) + ellipsis;
        return (
            <div>
                <h2 className="card__title">{croppedTitle}</h2>
            </div>
        );
    }
};

export default CardTitle;
