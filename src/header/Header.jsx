import React from 'react'
import style from './header.module.scss'

const Header = () => {



  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src="img/logo.svg" alt="logo" width={176} height={62} />
        </div>
        <div className={style.title}>
          <ul>
            <a href="/#"><li>Главная</li></a>
            <a href="/#"><li>Подукция</li></a>
            <a href="/#"><li>Где купить</li></a>
            <a href="/#"><li>Вопрос-ответ</li></a>
            <a href="/#"><li>Контакты</li></a>
          </ul>
        </div>
        <div className={style.mobile}>
          {
            toggleMenu
              ? <><img src="/img/close.svg" alt="close" width={28} height={20} onClick={() => setToggleMenu(false)} /></>
              : <><img src="/img/burger.svg" alt="burger" onClick={() => setToggleMenu(true)} /></>
          }

          {
            toggleMenu && (<div className={style.menu}>
              <ul>
                <a href="/#"><li>Главная</li></a>
                <a href="/#"><li>Подукция</li></a>
                <a href="/#"><li>Где купить</li></a>
                <a href="/#"><li>Вопрос-ответ</li></a>
                <a href="/#"><li>Контакты</li></a>
              </ul>
            </div>)

          }
        </div>
      </div>


    </div>
  )
}

export default Header