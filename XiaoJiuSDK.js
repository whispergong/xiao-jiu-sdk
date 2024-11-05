;(function () {
    const scriptSrc = document.currentScript.src
    let scriptDomain = 'static.4399om.com'
    if (scriptSrc) {
        scriptDomain = new URL(scriptSrc).host
    }

    const script = document.createElement('script')
    script.type = 'module'
    script.id = 'infofe-kdocs-sdk'
    script.src = `//${scriptDomain}/xiao-jiu-sdk/infofe-kdocs-sdk.js`
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `//${scriptDomain}/xiao-jiu-sdk/style.css`
    link.id = 'infofe-kdocs-sdk-css'
    document.head.appendChild(link)
})()
