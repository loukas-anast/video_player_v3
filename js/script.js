$('video, audio').mediaelementplayer({
    features: [
        'playpause', 'progress', 'volume', 'fullscreen'
    ],
    stretching: 'fill'
});
function highlight(){
    var video = document.getElementsByTagName('video')[0];
    var spans = document.getElementsByClassName('cap');
    var times = [
        [0.240, 4.130],
        [4.130, 7.535],
        [7.535, 11.270],
        [11.270, 13.960],
        [13.960, 17.940],
        [17.940, 22.370],
        [22.370, 26.880],
        [26.880, 30.920],
        [32.100, 34.730],
        [34.730, 39.430],
        [39.430, 41.190],
        [42.350, 46.300],
        [46.300, 49.270],
        [49.270, 53.760],
        [53.760, 57.780],
        [57.780, 60,150]
    ];
    for(var i = 0; i < times.length; i++){
        spans[i].style.background = 'transparent';
        spans[i].style.color = 'black';
        if(video.currentTime >= times[i][0] && video.currentTime <= times[i][1]){
            spans[i].style.background = 'orange';
            spans[i].style.color = 'white';
        }
    }
    console.log();
}
setInterval(highlight, 500);