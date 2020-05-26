import React from 'react';

function LastUpdate(res) {

    fetch(`https://covid19.mathdro.id/api/countries/italy`).then((response) => {

        return response.json();

    }).then((res) => {

        // console.log(responseJson);
        injectInfo(res);

    });

    function injectInfo(res) {
        var root = document.getElementById('LastUpdate');
        root.innerHTML = res.lastUpdate;
    }

    return (
        <div>
            Last update: <h1 key={res} id="LastUpdate">
            </h1>
        </div>
    );

}

export default LastUpdate;