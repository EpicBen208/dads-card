const born=new Date('09/10/1977/10:00:00')

setInterval(()=>{
    
    let now=new Date()
    let dif=now-born
    document.getElementById('timestamp-years').innerHTML=('Years '+Math.round(((((dif/1000)/60)/60)/24)/364))
    document.getElementById('timestamp-days').innerHTML=('Days '+Math.round((((dif/1000)/60)/60)/24))
    document.getElementById('timestamp-hours').innerHTML=('Hours '+Math.round(((dif/1000)/60)/60))
    document.getElementById('timestamp-minutes').innerHTML=('Minutes '+Math.round((dif/1000)/60))
    document.getElementById('timestamp-seconds').innerHTML=('Seconds '+Math.round(dif/1000))
    document.getElementById('timestamp-milliseconds').innerHTML=('Milliseconds '+(dif))
    document.getElementById('timestamp-microseconds').innerHTML=('Microseconds '+Math.round((dif*1000)+Math.random()*999))
}, 1);