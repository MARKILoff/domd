import { fontSize } from '@material-ui/system';
import React from 'react';
import home1 from '../images/home1.svg';
import home2 from '../images/home2.svg';
import home3 from '../images/home3.svg';
import home4 from '../images/home4.svg';
import home5 from '../images/home5.svg';
import home6 from '../images/home6.svg';

const Home = () => {
    return (
        <div>
            <div>
                <div className="text-2xl text-center font-extrabold">Оказываем  услуги комплексно,</div>
                <div className="text-2xl font-bold text-center">совмещая отдельные виды работ</div>
            </div>
            <div className="grid grid-cols-10">
                <div className="col-span-2"></div>
                <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                    <div className="text-center text-xl text-bold">Каркасные дома</div>
                    <br />
                    <div className="text-center">
                        <button className="rounded border h-10 w-40 bg-yellow-400 m-3">Подробнее 👉</button>
                    </div>
                    <br />
                    <img className="h-4/5" src={home1} alt="" />
                </div>

                <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                    <div className="text-center text-xl text-extrabold">Дома из клеёного бруса</div>
                    <br />
                    <div className="text-center">
                        <button className="rounded border h-10 w-40 bg-yellow-400 m-3">Подробнее 👉</button>
                    </div>
                    <img className="h-4/5" src={home2} alt="" />
                </div>

                <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                    <div className="text-center text-xl text-bold">Дома из брёвен</div>
                    <br />
                    <div className="text-center">
                        <button className="rounded border h-10 w-40 bg-yellow-400 m-3">Подробнее 👉</button>
                    </div>
                    <img className="h-5/6" src={home3} alt="" />
                </div>
                <div className="col-span-2"></div>

            </div>
            <div className="col-span-12">
                <div className="grid grid-cols-10">
                    <div className="col-span-2"></div>
                    <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                        <div className="text-center text-xl text-bold">Фахверковые дома</div>
                        <br />
                        <div className="text-center">
                            <button className="rounded border h-10 w-40 bg-yellow-400 m-3">Подробнее 👉</button>
                        </div>
                        <img src={home4} alt="" />
                    </div>

                    <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                        <div className="text-center text-xl text-bold">Беседки</div>
                        <br />
                        <div className="text-center">
                            <button className="rounded border h-10 w-40 bg-yellow-400 m-3">Подробнее 👉</button>
                        </div>
                        <img src={home5} alt="" />
                    </div>

                    <div className="col-span-2 bg-gray-100 hover:bg-yellow-300 m-2">
                        <div className="text-center text-xl text-bold">Ремонт и отделка</div>
                        <br />
                        <div className="text-center">
                            <button className="rounded border h-10 w-40 bg-yellow-400 m-3">Подробнее 👉</button>
                        </div>
                        <img src={home6} alt="" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home;