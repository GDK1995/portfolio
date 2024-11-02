export const scroolToTop = (coord) => {
  window.scrollTo({
    top: coord, behavior: 'smooth'
  })
}
