const iframeStyler = (iframeId, styles) => {
  const iframe = document.getElementById(iframeId)
  if(iframe) {
    const doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document
    let css = doc.createElement('style')
    css.type = 'text/css'
    if (css.styleSheet) css.styleSheet.cssText = styles
    else css.appendChild(doc.createTextNode(styles))
    doc.getElementsByTagName("head")[0].appendChild(css)
  }
}

export default iframeStyler