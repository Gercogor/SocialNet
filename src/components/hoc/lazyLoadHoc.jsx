import React from 'react';
import Loader from "../Loader/Loader";

const LazyLoadHoc = ({Component,...props}) => {
    return (
        <React.Suspense fallback={<Loader/>}>
            <Component {...props}/>
        </React.Suspense>
    );
};

export default LazyLoadHoc;