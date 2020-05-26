import { useState, useEffect } from 'react';

function useStats() {
    const [stats, setStats] = useState();

    useEffect(() => {
        async function fetchData() {            
            const data = await fetch(`https://covid19.mathdro.id/api/countries/italy`)
                .then(res => res.json());
             setStats(data);
             console.log(data);
        }
        fetchData();
    }, []);
    return stats;
}

export default useStats;