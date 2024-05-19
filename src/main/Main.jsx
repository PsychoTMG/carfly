import React from 'react'
import style from './main.module.scss'


const arrPhoto = ['img/bigPhoto.svg', 'img/Group 3.svg']

const Main = () => {

    const [count, setCount] = React.useState(0)

    const next = () => {
        setCount(count===arrPhoto.length-1?0:count+1)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>

                {/* левый */}
                <div className={style.leftContent}>
                    <h1>Автомагнитола CarFly M320</h1>
                    <p>Приемник для смартфона SPH-10BT Pioneer создан для безопасного и простого доступа к приложениям смартфона при помощи четырех специальных кнопок.</p>
                    <button><p>Подробнее</p><img src="img/icon.svg" alt="icon" /> </button>
                </div>

                {/* центр */}
                <div className={style.centerContent}>

                    <img src={arrPhoto[count]} alt="logo1" />

                    <div className={style.haracter}>
                        <img src="img/logo1.svg" alt="logo1" width={30} height={30} />
                        <img src="img/logo2.svg" alt="logo2" width={30} height={30} />
                        <img src="img/logo3.svg" alt="logo3" width={30} height={30} />

                    </div>
                </div>

                {/* правая часть */}
                <div className={style.rightContent}>
                    <img onClick={() => next()} src="img/next.svg" alt="next" />
                    <div className={style.next}>
                        <p>ДАЛЕЕ</p>
                        <img src="img/miniPhoto.svg" alt="miniPhoto" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main