document.getElementById('start').addEventListener('click', () => {
    navigator.mediaDevices
        .getDisplayMedia({
            video: {
                cursor: 'motion',
            },
            audio: true,
        })
        .then(stream => {
            videoElement = document.getElementById('video');
            videoElement.srcObject = stream;
        })
        .catch(console.error);
});