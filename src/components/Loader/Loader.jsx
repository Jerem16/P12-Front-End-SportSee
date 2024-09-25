import React from "react";


const Loader = () => {
    return (
        <div className="loader-wrapper">
            <Loading />
        </div>
    );
};

export default React.memo(Loader);

export const Loading = () => {
    return (
        <div className="loading">
        </div>
    );
};
