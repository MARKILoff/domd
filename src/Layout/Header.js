import React from 'react';
import img from '../images/image 2.svg';
import CallIcon from '@material-ui/icons/Call';
import TelegramIcon from '@material-ui/icons/Telegram';


const Header = () => {
    return (
        <div className="grid grid-cols-12 h-20">
            <div className="col-span-2 mt-4">
                <img src={img} alt="" />
            </div>
            <div className="col-span-3 mt-4">
                <div className="text-xs text-white">Строительство деревянных домов</div>
                <div className="font-bold text-sm text-white"> за <span className="font-bold text-sm text-yellow-600"> 45</span> дней </div>
            </div>
            <div className="col-span-3 mt-4">
                <div className="text-center text-xs text-yellow-600">Нажмите, чтобы начать общение</div>
                <div className="grid grid-cols-6 gap-3 m-2">
                    <div className="col-span-3 text-center py-1 px-2 text-white bg-gray-600">< CallIcon className="text-blue-500" /> Viber</div>
                    <div className="col-span-3 text-center py-1 px-2 text-white bg-gray-600">< TelegramIcon className="text-blue-500" /> Telegram</div>
                </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3 my-5">
                <div className="text-sm text-white"><CallIcon className="text-xs text-yellow-600" />+38 (098) 271-50-35</div>
                <button type="button" className="py-1 px-2 text-center bg-yellow-400 font-sans">ПЕРЕЗВОНИТЬ МНЕ</button>
            </div>
        </div>
    )
}

export default Header;