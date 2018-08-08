import domToImage from 'dom-to-image'

function saveImage(id){
  domToImage.toPng(document.getElementById(id))
  .then( dataUrl => {
    console.log(dataUrl);
    // let link = document.createElement('a')
    //   link.download = id + '.png'
    //   link.href = dataUrl
    //   link.click()
  })
  .catch( error => {
    console.error('oops, something went wrong!', error)
  })
}

window.saveImage = saveImage

export default saveImage