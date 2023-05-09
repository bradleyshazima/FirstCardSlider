const config  = {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  startAt: '1',
  breakpoints: {
    800: {
      perView: 2,
    },

    420: {
      perView: 1
    }
  }

}

new Glide('.glide', config).mount()