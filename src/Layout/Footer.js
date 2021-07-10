import React from 'react';
import img from '../images/f.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-12 bg-gray-900 h-48">
                <div className="col-span-2"></div>
                <div className="col-span-1 my-10">
                    <img src={img} alt="" />
                </div>
                <div className="col-span-2 ml-5 my-7">
                    <div className="text-md text-white font-bold my-3">Виды строительства</div>
                    <div className="text-xs text-white ">
                        <div>
                            - Каркасные дома
                        </div>
                        <div>
                            - Дома из клеёного бруса
                        </div>
                        <div>
                            - Фахверковые дома
                        </div>
                        <div>
                            - Дома из брёвен
                        </div>
                        <div>
                            - Беседки
                        </div>
                        <div>
                            - Ремонт и отделка
                        </div>
                    </div>
                </div>
                <div className="col-span-2 my-10">
                    <div className="text-lg text-white">
                        <div>Наши работы</div>
                        <div>Отзывы клиентов</div>
                        <div> Партнеры</div>
                    </div>
                </div>
                <div className="col-span-2 my-10">
                    <div className="text-lg text-white">Контакты</div>
                    <div className="text-xs text-white  my-3">
                        Украина, г. Одесса
                        ул. Комитетская, 24Б
                        Эл.почта: odessadomd@gmail.com
                        +38 (098) 271-50-35
                    </div>
                    <div className="flex gap-4">
                        <FacebookIcon className="text-blue-500" />
                        <InstagramIcon className="text-red-400" />
                        <YouTubeIcon className="text-red-600" />
                        <div className="text-white text-xs m-2">Свежие видеоу нас на канале</div>
                    </div>
                </div>
                <div className="col-span-1 my-10">
                <KeyboardArrowUpIcon className="text-yellow-300 ml-10" style={{fontSize: "100px"}} />
                </div>
            </div>
        </div>
    )
}

export default Footer;