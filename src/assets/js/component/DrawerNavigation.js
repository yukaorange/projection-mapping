import Component from '@js/class/Component'
import each from 'lodash/each'
import GSAP from 'gsap'

import DrawerNavigationGenerator from '../class/DrawerNavigationGenerator'

export default class DrawerNavigation extends Component {
  constructor() {
    super({
      element: '.drawer-nav',
      elements: {
        inner: '.drawer-nav__inner',
        list: '.drawer-nav__list',
        item: '.drawer-nav__list__item',
        link: '.drawer-nav__list__item__link',
        button: document.querySelector('.drawer-button'),
        closeButton: document.querySelector('.drawer-nav__close')
      }
    })

    this.createNav()
  }

  createNav() {
    this.drawerNav = new DrawerNavigationGenerator({
      button: this.elements.button,
      drawerNav: this.element,
      drawerInner: this.elements.inner,
      drawerNavButton: this.elements.link,
      closeButton: this.elements.closeButton
    })
  }
}
