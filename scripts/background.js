chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(details.method == "POST") {
            let formData = details.requestBody.formData;
            let cancel = false;

            if(formData) {
                Object.keys(formData).forEach(key => {
                    formData[key].forEach(value => {
                        if(value.includes("foo")) {
                            cancel = true;
                        }
                    });
                });
            }

            return {cancel: cancel};
        }
    },
    {urls: [""]},
    ["blocking", "requestBody"]
);