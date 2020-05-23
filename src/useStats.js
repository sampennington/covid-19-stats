import React, { useState, useEffect } from 'react';

function useStats(url) {
    const [stats, setStats] = useState();

    useEffect(() => {
        async function fetchData() {            
            const data = await fetch(url)
                .then(res => res.json());
             setStats(data);
             // console.log(data);
        }
        fetchData();
    }, []);
    return stats;
}

export default useStats;