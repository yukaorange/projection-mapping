import Page from '@js/class/Page'

import UI from '@js/component/UI'

export default class Home extends Page {
  constructor() {
    super({
      id: 'home',
      element: '.home',
      elements: {
        link: '.home__link'
      }
    })
  }

  create() {
    super.create()
  }

  createUI(params){

    this.UI = new UI(params)
  }

  destroy() {
    super.destroy()
  }

  addEventListeners() {}
}
