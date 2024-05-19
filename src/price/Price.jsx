import React from 'react'
import style from './rafce.module.scss'


const blockArr = [
    {
        name: 'Аккредитив, как следует из вышесказанного, основан на опыте?',
        text: 'тут описание 1'
    },
    {
        name: 'Аккредитив, как следует из вышесказанного, основан на опыте?',
        text: 'тут описание 2'
    }, {
        name: 'Аккредитив, как следует из вышесказанного, основан на опыте?',
        text: 'тут описание 3'
    }, {
        name: 'Аккредитив, как следует из вышесказанного, основан на опыте?',
        text: 'тут описание 4'
    }, {
        name: 'Аккредитив, как следует из вышесказанного, основан на опыте?',
        text: 'тут описание 5'
    }
]

const Price = () => {

    const [open, setOpen] = React.useState(false)
    const [opened, setOpened] = React.useState(0)


    const openClick = (index) => {
        setOpen(!open)
        setOpened(index)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Вопрос - ответ</h1>
                <div className={style.blocks}>
                    {
                        blockArr.map((item, index) => <div className={style.block}><div className={style.info}>{item.name} <img src='img/dawn.svg' onClick={() => openClick(index)} /></div><div className={style.active}>{open && opened === index ? item.text : null}</div> </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Price