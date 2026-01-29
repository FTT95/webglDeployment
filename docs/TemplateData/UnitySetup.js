function unityShowBanner(msg, type) {
        
    }
    
    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/webglbuild.loader.js";
    var config = {
        dataUrl: buildUrl + "/webglbuild.data",
        frameworkUrl: buildUrl + "/webglbuild.framework.js",
        codeUrl: buildUrl + "/webglbuild.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "My project",
        productVersion: "0.1.0",
        showBanner: unityShowBanner,
    };

    createUnityInstance(canvas, config, (progress) => {
    })
        .then((unityInstance) => {
            gameInstance = unityInstance;
        })
        .catch((message) => {
            alert(message);
        });
