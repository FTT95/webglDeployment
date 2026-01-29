function unityShowBanner(msg, type) {
        
    }
    
    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/webglbuild.loader.js";
    var config = {
        dataUrl: buildUrl + "/webglbuild.data.br",
        frameworkUrl: buildUrl + "/webglbuild.framework.js.br",
        codeUrl: buildUrl + "/webglbuild.wasm.br",
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
