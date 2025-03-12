import React from 'react';
import { ShoppingBag, Truck, Headphones, RefreshCw } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: ShoppingBag,
            title: 'Широкий выбор',
            description: 'Выбирайте из тысяч стильных и удобных моделей обуви'
        },
        {
            icon: Truck,
            title: 'Быстрая доставка',
            description: 'Получите быструю доставку обуви к порогу вашего дома'
        },
        {
            icon: Headphones,
            title: '24/7 поддержка',
            description: 'Наша служба поддержки клиентов всегда готова помочь'
        },
        {
            icon: RefreshCw,
            title: 'Легкий возврат',
            description: '30-дневная политика возврата для всех покупок'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">About</h1>
                <p className="text-lg text-gray-600">
                    1111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="aspect-w-16 aspect-h-9">
                    <img
                        src="https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
                        alt="Store"
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">2</h2>
                        <p className="text-gray-600">
                            1111111111111111111111111111111111111111111111
                            1111111111111111111111111111111111111111111111
                            1111111111111111111111111111111111111111111111
                            1111111111111111111111111111111111111111111111
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                        <feature.icon className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;