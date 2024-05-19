import React from 'react'
import style from './product.module.scss'


const arrBlock = [
  { img: 'img/images.svg', name: 'Автомагнитола CarFly M320', text: 'Приемник для смартфона SPH-10BT Pioneer создан для безопасного и простого доступа к приложениям смартфона при помощи четырех специальных кнопок.', price: '14 999 р.' },
  { img: 'img/images.svg', name: 'Автомагнитола CarFly M320', text: 'Приемник для смартфона SPH-10BT Pioneer создан для безопасного и простого доступа к приложениям смартфона при помощи четырех специальных кнопок.', price: '14 999 р.' },
  { img: 'img/images.svg', name: 'Автомагнитола CarFly M320', text: 'Приемник для смартфона SPH-10BT Pioneer создан для безопасного и простого доступа к приложениям смартфона при помощи четырех специальных кнопок.', price: '14 999 р.' },

]


const Product = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>Продукция</h1>
        <div className={style.blocks}>

          {
            arrBlock.map(item => <div className={style.block}>
              <img src={item.img} alt="" />
              <div className={style.title}>
                <h1>{item.name}</h1>
                <p>{item.text}</p>
              </div>
              <div className={style.price}>{item.price}</div>
              <button>Подробнее</button>
            </div>)
          }

        </div>
      </div>
    </div>
  )
}

export default Product