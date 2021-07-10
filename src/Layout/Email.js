import React from 'react';
import background from '../images/bg2.svg';
import CallIcon from '@material-ui/icons/Call';
import TelegramIcon from '@material-ui/icons/Telegram';

const Email = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <div className="text-3xl text-center text-bold">Наши контакты</div>

            <div className="grid grid-cols-12">
                <div className="col-span-2"></div>

                <div className="col-span-4 h-96 bg-gray-100 rounded my-5">
                    <div className="ml-8">
                        <div className="text-2xl font-bold my-5">Задать вопрос</div>
                        <div className="text-sm text-left my-5">
                            Остались вопросы? Наши эксперты
                            ответят вам в ближайшее рабочее время!
                        </div>
                        <div>
                            <textarea placeholder="Ваш вопросы" className="h-24 w-11/12" cols="30" rows="10"></textarea>
                            <input placeholder="Телефон" className="w-11/12 my-2" type="text" />
                        </div>
                        <div>
                            <button className="rounded border h-10 w-40 bg-yellow-400 my-6">Отправить вопрос</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 h-96 bg-gray-100 rounded ml-5 my-5">
                    <div className="ml-8">
                        <div className="text-2xl font-bold my-5">Мы на связи</div>
                        <div className="text-sm text-left my-5">
                            Украина, г. Одесса
                            ул. Комитетская, 24Б
                        </div>
                        <div className="text-sm text-left my-5">
                            Эл.почта: odessadomd@gmail.com
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 m-4 text-center text-white bg-gray-600">< CallIcon className="text-blue-500" /> Viber</div>
                            <div className="col-span-1 m-4 text-center text-white bg-gray-600">< TelegramIcon className="text-blue-500" /> Telegram</div>
                        </div>
                        <div className="font-bold my-5 text-2xl">
                            +38 (098) 271-50-35
                        </div>
                        <div className="text-xs text-yellow-300">Мы на связи</div>
                        <div>
                            <button className="rounded border h-10 w-40 bg-yellow-400 my-6">ПЕРЕЗВОНИТЬ МНЕ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Email;