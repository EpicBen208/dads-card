
setInterval(() => {
    let born=Date.now('Sep 10 1977 10:00:00')
    document.getElementById('timestamp-years').innerHTML=('Years '+Math.round(((((born/1000)/60)/60)/24)/364))
    document.getElementById('timestamp-days').innerHTML=('Days '+Math.round((((born/1000)/60)/60)/24))
    document.getElementById('timestamp-hours').innerHTML=('Hours '+Math.round(((born/1000)/60)/60))
    document.getElementById('timestamp-minutes').innerHTML=('Minutes '+Math.round((born/1000)/60))
    document.getElementById('timestamp-seconds').innerHTML=('Seconds '+Math.round(born/1000))
    document.getElementById('timestamp-milliseconds').innerHTML=('Milliseconds '+(born))
    document.getElementById('timestamp-microseconds').innerHTML=('Microseconds '+(born*1001))
}, 1);

    