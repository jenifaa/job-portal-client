import React from 'react';
import birds from '../../assets/birdss.json'
import Lottie from 'lottie-react';

const Route2 = () => {
    return (
        <div>
            <Lottie animationData={birds}></Lottie>
        </div>
    );
};

export default Route2;