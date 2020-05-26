import React from 'react';

function LastUpdate(res) {     

    fetch(`https://covid19.mathdro.id/api/countries/italy`).then((response) => {

        return response.json();

    }).then((res) => {

        injectInfo(res);

    });

    function injectInfo(res) {
        var root = document.querySelector('.LastUpdate');
        root.innerHTML = res.lastUpdate;
    }

    return (
        <div>
            <p>Last update:</p>
            <h1 key={res} class="LastUpdate">                
            </h1>
        </div>
    );

}

export default LastUpdate;