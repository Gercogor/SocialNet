import React from 'react';
import Loader from "../Loader/Loader";

const LazyLoadHoc = ({Component}) => {
    return (
        <React.Suspense fallback={<Loader/>}>
            <Component />
        </React.Suspense>
    );
};

export default LazyLoadHoc;