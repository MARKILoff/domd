import React from 'react';
import background from '../images/bg.svg';
import img from '../images/doda.svg';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Carousel from './Carousel';

const service = [
    {
        text: "Мы не просто предоставляем услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания.",
        icon: <DoneOutlineIcon />,
    },
    {
        text: "Мы не просто предоставляем услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания.",
        icon: <DoneOutlineIcon />,
    },
    {
        text: "Мы не просто предоставляем услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания.",
        icon: <DoneOutlineIcon />,
    },
    {
        text: "Мы не просто предоставляем услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания.",
        icon: <DoneOutlineIcon />,
    },
    {
        text: "Мы не просто предоставляем услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания.",
        icon: <DoneOutlineIcon />,
    },
    {
        text: "Мы не просто предоставляем услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания.",
        icon: <DoneOutlineIcon />,
    },

]

const Section = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${background})` }}>
                <div className="text-center my-5">
                    <button className="rounded border h-10 w-40 bg-yellow-400">Смотреть все 👉</button>
                </div>

                <div className="text-center text-3xl font-bold">Готовы начать строить дом</div>
                <div className="text-center text-3xl ">с надежной компанией?</div>

                <div className="grid grid-cols-12">
                    <div className="col-span-1"></div>
                    <div className="col-span-3">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-span-8">
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-1 row-span-3"></div>
                            {
                                service.map((item, index) => (
                                    <div key={index} className="col-span-2 my-5">
                                        <span className="text-yellow-300" key={index}>
                                            {item.icon}
                                        </span>
                                        {item.text}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 h-40 bg-gray-800 my-5">
                    <div className="col-span-2"></div>
                    <div className="col-span-1 my-10">
                        <span className="text-center text-6xl my-5 text-yellow-600">15</span>
                    </div>
                    <div className="col-span-1 my-10">
                        <div className="text-sm text-white text-left">лет опытав стоительстве</div>
                    </div>
                    <div className="col-span-1 my-10">
                        <span className="text-center text-6xl my-5 text-yellow-600">15</span>
                    </div>
                    <div className="col-span-1 my-10">
                        <div className="text-sm text-white ">специалистов в штате</div>
                    </div>
                    <div className="col-span-1 my-10">
                        <span className="text-center text-6xl my-5 text-yellow-600">53</span>
                    </div>
                    <div className="col-span-1 my-10">
                        <div className="text-sm text-white text-left">построенных домов</div>
                    </div>
                    <div className="col-span-1 my-10">
                        <span className="text-center text-sm text-red-800  text-left"><YouTubeIcon /></span>
                    </div>
                    <div className="col-span-1 my-10">
                        <div className="text-white text-sm text-left ">Наши ВИДЕО об отделке и устройстве смотрите на канале DOM-D</div>
                    </div>
                </div>

            </div>
            <div className="text-center  text-3xl">Используем только экологически чистые</div>
            <div className="text-center  text-3xl">и профессиональные материалы</div>
            <div className="grid grid-cols-12 text-center my-10 h-48 gap-10">
                <div className="col-span-1"></div>
                <div className="col-span-10">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Section;