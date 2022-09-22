let timeout

window.addEventListener("mousemove", () => {
  clearTimeout(timeout)
  let timeout = setTimeout(function () {
    console.log(e.x)
  }, 500)
})