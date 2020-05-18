function onLoad() {    
    setTimeout(() => {
        window.location = "pages/timer-page.html"    
    }, 1000);
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    
    receivedEvent: function(id) {

        onLoad()
    }
};

app.initialize();

