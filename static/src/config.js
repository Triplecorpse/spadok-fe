var config = {
    dataServiceUrl: (() => {
        if (window.location.host.indexOf('localhost:3000') > -1) {
            return 'http://localhost:8000';
            //return 'http://prespadok-tripleworld.rhcloud.com';
        } else {
            return 'http://spadok-tripleworld.rhcloud.com';
        }
    })()
};