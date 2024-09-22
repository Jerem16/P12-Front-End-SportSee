import React from "react";
const MusculationIcon = () => {
    return (
        <div className="side-icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Calque_1"
                x="0px"
                y="0px"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlSpace="preserve"
            >
                <rect width="64" height="64" rx="6" className="white-bg_icon" />
                <path
                    d="M45.712 36.576L48 34.288L45.712 32L40 37.712L26.288 24L32 18.288L29.712 16L27.424 18.288L25.136 16L21.712 19.424L19.424 17.136L17.136 19.424L19.424 21.712L16 25.136L18.288 27.424L16 29.712L18.288 32L24 26.288L37.712 40L32 45.712L34.288 48L36.576 45.712L38.864 48L42.288 44.576L44.576 46.864L46.864 44.576L44.576 42.288L48 38.864L45.712 36.576Z"
                    fill="#FF0101"
                />
            </svg>
        </div>
    );
};
export default React.memo(MusculationIcon);
