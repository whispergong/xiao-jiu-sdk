;(function () {
    const scriptSrc = document.currentScript.src
    let scriptDomain = 'static.4399om.com'
    if (scriptSrc) {
        scriptDomain = new URL(scriptSrc).host
    }

    const script = document.createElement('script')
    script.type = 'module'
    script.id = 'infofe-kdocs-sdk'
    script.src = `//${scriptDomain}/xiao-jiu-sdk/infofe-kdocs-sdk.js?v=${new Date().getTime()}`
    document.body.appendChild(script)
})()
