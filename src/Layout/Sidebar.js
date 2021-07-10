import React from 'react';
import img from '../images/image 72.svg';
import ExtensionIcon from '@material-ui/icons/Extension';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import PaletteIcon from '@material-ui/icons/Palette';


const Sidebar = (props) => {
    return (
        <div>
            <div className="text-5xl text-center">Приступим cегодня</div>
            <div className="text-2xl text-center">Напишите нам, чтобы получить персональное предложение</div>
            <br />

            <div className="grid grid-cols-10">
                <div className="col-span-2"></div>
                <div className="col-span-3 bg-gray-800">
                    <div className="text-left text-2xl text-yellow-500 m-5">
                        Cтроительство дома,
                        не покажешь картинкой
                    </div>
                    <div className="text-left text-lg text-white m-5">
                        За каждым домом стоит целая история,
                        смотри полезные  презентации у нас
                        на канале.
                    </div>
                    <button className="rounded border h-10 w-40 bg-yellow-400 m-5">Заказать расчет</button>
                </div>
                <div className="col-span-3 bg-gray-800">
                    <div><img src={img} alt="" /></div>
                </div>
            </div>

            <div className="text-center text-3xl my-5">Заботимся о Вашем спокойствии</div>

            <div className="grid grid-cols-10">
                <div className="col-span-2"></div>
                <div className="col-span-2">
                    <div className="text-yellow-300" ><ExtensionIcon /></div>
                    <div className="text-sm font-semibold text-left">Не поднимаем стоимость</div>
                    <div className="text-left text-xs">Фиксируем стоимость работ в договоре</div>
                </div>
                <div className="col-span-2">
                    <div className="text-yellow-300"><DateRangeIcon /></div>
                    <div className="text-sm font-semibold text-left">Поэтапная оплата</div>
                    <div className="text-left text-xs">
                        Оплата каждого вида работ разбита на
                        2 части(50% аванс 50% по завершению)
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="text-yellow-300"><ScheduleIcon /></div>
                    <div className="text-sm font-semibold text-left">Соблюдаем сроки</div>
                    <div className="text-left text-xs">Несем ответственность за соблюдение сроков.</div>
                </div>

                <div className="col-span-12 my-5">
                    <div className="grid grid-cols-10">
                        <div className="col-span-2"></div>
                        <div className="col-span-2">
                            <div className="text-yellow-300"><LocalFloristIcon /></div>
                            <div className="text-sm font-semibold text-left">Экологичность</div>
                            <div className="text-left text-xs">Дом строится из натуральных материалов</div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-yellow-300" ><DevicesOtherIcon /></div>
                            <div className="text-sm font-semibold text-left">Самостоятельно</div>
                            <div className="text-left text-xs">Закупаем и доставляем на объект, качественные материалы и расходники</div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-yellow-300"><PaletteIcon /></div>
                            <div className="text-sm font-semibold text-left">Проводим уборку</div>
                            <div className="text-left text-xs">
                                В процессе работ и вывозим мусор после завершения работ.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;