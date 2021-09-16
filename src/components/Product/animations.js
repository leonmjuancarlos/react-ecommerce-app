const imageToShow = (e, imgAmount) => {
  const imageWidth = e.target.offsetWidth

  const rect = e.target.getBoundingClientRect()
  const x = e.clientX - rect.left // x position within the element.
  // const y = e.clientY - rect.top // y position within the element.

  let i = 0
  while (i <= imgAmount) {
    if (
      (i * imageWidth) / imgAmount > x &&
      x < ((i + 1) * imageWidth) / imgAmount
    ) {
      return i - 1
    }
    i++
  }
  // return 0 1 2 3
}

export default imageToShow
