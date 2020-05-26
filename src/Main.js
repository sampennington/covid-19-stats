import React from 'react';
import useStats from './useStats';
// import Chart from './Chart';
import LastUpdate from './lastUpdate';

// useState --> https://it.reactjs.org/docs/hooks-state.html
// useEffect --> https://it.reactjs.org/docs/hooks-effect.html
// Async / Await --> https://javascript.info/async-await

function Stats() {
    
    const statGrid = {        
        marginTop: '55px',
        padding: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '2rem'
    };

    const statBlock = {
        border: '1px solid black',
        fontSize: '1rem',
        textAlign: 'center'
    };

    const url = `https://covid19.mathdro.id/api/countries/italy`;
    
    const stats = useStats(url);
    
    if (!stats) return <p>Loading...</p>;
    return (        
        <div style={statGrid}>                            
            <div style={statBlock}>
                <h3>Total cases:</h3>
                <span>{stats.confirmed.value}</span>
            </div>            
            <div style={statBlock}>
                <h3>Recovered:</h3>
                <span>{stats.recovered.value}</span>
            </div>
            <div style={statBlock}>
                <h3>Deaths:</h3>
                <span>{stats.deaths.value}</span>
            </div>
        </div>
    );
}

function IndexPage() {
    return (
        <div>
            <LastUpdate>                
            </LastUpdate>
            <Stats>
            </Stats>
        </div>
    );
}

export default IndexPage;