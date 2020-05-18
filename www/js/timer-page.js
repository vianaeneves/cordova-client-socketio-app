var socket = null;

function onLoad() {
    console.info("onLoad")

    $.ajax(getConfigFileUrl()).done(function (config) {
        console.log(`CONFIG: ${JSON.stringify(config, undefined, 2)}`)
        socket = io.connect(config.SOCKET_SERVER_BASE_PATH);

        socket.emit(config.CHANNEL_CLOCK, "subscribe")

        socket.on(config.CHANNEL_START_CONNECTION, function () {

            socket.on(config.CHANNEL_MESSAGES_CONNECTION, (msg) => {
                console.info(msg)
            })

            socket.on(config.CHANNEL_CLOCK, (time) => {
                console.info({ time })
                let date = new Date(time)
                let readableDate = date.toDateString()
                let readableTime = date.toTimeString()
                $("#date").html(`${readableDate}`)
                $("#time").html(`${readableTime}`)
            })
        })

        hideLoading()

    }).fail(function (e) {
        console.log(e);        
        alert("Open file error");
        hideLoading()
    })

}

// default call
$(document).ready(function () {        
    onLoad()
});