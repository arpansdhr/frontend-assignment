'use client';
import React, { useState } from 'react';

const RandomCat = () => {
    const [catUrl, setCatUrl] = useState<string>('');
    const [catId, setCatId] = useState<string>('');

    const getRandomCat = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1');
            const data = await response.json();
            if (data && data.length > 0) {
                setCatUrl(data[0].url);
                setCatId(data[0].id);
            }
        } catch (error) {
            console.error('Error fetching random cat:', error);
        }
    };

    return (
        <div className='p-5 my-5 bg-black text-center text-yellow-600 text-xl hover:bg-white'>
            <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={getRandomCat}>Get Random Cat</button>
            {catUrl && (
                <>
                    <img src={catUrl} alt="Random Cat" />
                    <p>ID: {catId}</p>
                </>
            )}
        </div>
    );
};

export default RandomCat;
