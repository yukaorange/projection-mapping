import GSAP from 'gsap'

import Component from '@js/class/Component'

export default class UI extends Component {
  constructor(params) {
    super({
      element: '.ui',
      elements: {
        button: '.ui__list__item__button'
      }
    })
    this.params = params

    this.addUIListeners()
  }

  addUIListeners() {
    this.elements.button.forEach(button => {
      button.addEventListener('click', _ => {
        this.onButtonClick(button)
      })
    })
  }

  onButtonClick(clickedButton) {
    for (let key in this.params) {
      const targetValue = clickedButton.dataset['control'] === key ? 1 : 0

      GSAP.to(this.params[key], {
        duration: 1,
        ease: 'expo.inOut',
        value: targetValue,
        onComplete: () => {}
      })
    }

    this.elements.button.forEach(button => {
      if (button == clickedButton) {
        button.classList.add('active')
        button.classList.remove('inactive')
      } else {
        button.classList.remove('active')
        button.classList.add('inactive')
      }
    })
  }
}
