import React from 'react';
import useStats from './useStats';

// useState --> https://it.reactjs.org/docs/hooks-state.html
// useEffect --> https://it.reactjs.org/docs/hooks-effect.html
// Async / Await --> https://javascript.info/async-await

function Stats() {
    
    const statGrid = {
        marginTop: '170px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem'
    };

    const statBlock = {
        backgroundColor: 'azure',
        fontSize: '2rem'
    };

    const url = 'https://covid19.mathdro.id/api/countries/italy';
    
    const stats = useStats(url);
    
    if (!stats) return <p>Caricamento...</p>;
    return (
        <div style={statGrid}>
            <div style={statBlock}>
                <h3>Casi totali:</h3>
                <span>{stats.confirmed.value}</span>
            </div>
            <div style={statBlock}>
                <h3>Decessi:</h3>
                <span>{stats.deaths.value}</span>
            </div>
            <div style={statBlock}>
                <h3>Guariti:</h3>
                <span>{stats.recovered.value}</span>
            </div>
        </div>
    );
}

function IndexPage() {
    return (
        <div>
            <Stats url='https://covid19.mathdro.id/api/countries/italy'>

            </Stats>
        </div>
    );
}

export default IndexPage;