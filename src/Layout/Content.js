import React from 'react';
import img1 from '../images/remove.svg';
import img from '../images/remove2.svg';
import background from '../images/image5.svg';
import styles from './Content.module.css';

const Content = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="grid grid-cols-12">
            <div className="col-span-2"></div>

            <div className="col-span-5 mt-10">
                <div className="font-bold text-5xl text-white my-5">Сделаем ваш <span className="text-yellow-400">Дом</span></div>
                <div className="font-bold text-3xl text-white">готовым к комфортному</div>
                <div className="font-bold text-3xl text-white">проживанию</div>
                <br />
                <div className="font-semibold text-base text-white">
                    Строительство деревянных домов «под ключ»: коттеджи, беседки, бани, дома из клееного бруса
                </div>
                <br />
                <div className="col-span-4">
                    <div className="grid grid-cols-6 mt-5 ">
                        <div className="col-span-2">
                            <div style={{ width: "120px" }} className="rounded font-semibold text-xs h-10 text-center bg-gray-300  hover:bg-yellow-500 cursor-pointer">Демонтаж</div>
                            <br />
                            <div style={{ width: "120px" }} className="rounded font-semibold text-xs h-10 text-center bg-gray-300 hover:bg-yellow-500 cursor-pointer">Кровельныеработы</div>
                        </div>
                        <div className="col-span-2">
                            <div style={{ width: "120px" }} className="rounded font-semibold text-xs h-10 text-center bg-gray-300 hover:bg-yellow-500 cursor-pointer">Бетонные работы</div>
                            <br />
                            <div style={{ width: "120px" }} className="rounded font-semibold text-xs h-10 text-center bg-gray-300 hover:bg-yellow-500 cursor-pointer">Отделка фасадов</div>
                        </div>
                        <div className="col-span-2">
                            <div style={{ width: "120px" }} className="rounded font-semibold text-xs h-10 text-center bg-gray-300 hover:bg-yellow-500 cursor-pointer">Возведение стен</div>
                            <br />
                            <div style={{ width: "120px" }} className="rounded font-semibold text-xs h-10 text-center bg-gray-300 hover:bg-yellow-500 cursor-pointer">Инженерные работы</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-4 bg-gray-300 rounded m-10">
                <div className="text-center text-2xl font-bold m-3">Заказать расчет</div>
                <br />
                <div className="text-center">Оказываем  услуги комплексно, совмещая отдельные виды работ</div>
                <div className="m-7 text-center">
                    <img src={img1} />
                </div>
                <div className="text-center">
                    <button className=" rounded border h-10 w-40 bg-yellow-400 m-3">Заказать расчет</button>
                </div>
            </div>
        </div>
    )
}

export default Content;