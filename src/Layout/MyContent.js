import React from 'react';
import viber1 from '../images/viber1.svg';
import viber2 from '../images/viber2.svg';
import viber3 from '../images/viber3.svg';
import viber4 from '../images/viber4.svg';
import viber5 from '../images/viber5.svg';
import viber6 from '../images/viber6.svg';

const MyContent = () => {
    return (
        <div>
            <div className="text-3xl text-center font-bold">Посмотрите на готовые дома с комплексом</div>
            <div className="text-3xl text-center">отделки и прокладки коммуникаций.</div>

            <div className="grid grid-cols-12">
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={viber1} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={viber2} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={viber3} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={viber4} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={viber5} alt="" />
                </div>
                <div className="col-span-4 border-2 border-gray-100">
                    <img src={viber6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MyContent;