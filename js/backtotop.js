export default class BackToTop {
  constructor(el, opts = {}) {

    // Проверка елемента на его тип, и коррекция... 
    if (typeof el === 'string') {
        this.button = document.querySelector(el);
      } else if (el instanceof Element) {
        this.button = el;
      } else {
        throw new Error('Неверный тип аргумента');
      }
      if (!this.button) {
        throw new Error('Элемент не найден');
      }

      // Дефолтные опции
    const defaultConfig = {     
      breakpoint: 500,
      activeClass: "is-active",
    };
    this.options = Object.assign(defaultConfig, opts);
    this.listener();
  }

  // Функция прокрутки
  scrollToTop(e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Отслеживание кликов и скролинга
  listener() {
    this.button.addEventListener("click", (e) => this.scrollToTop(e));
    window.addEventListener("scroll", (e) => this.checkPosition(e));
  }

  // Функция реагирования на положение скролинга
  checkPosition(e) {
    if (window.scrollY > this.options.breakpoint) {
      this.button.classList.add(this.options.activeClass);
    } else {
      this.button.classList.remove(this.options.activeClass);
    }
  }
}
