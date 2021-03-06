import React from 'react';
import './Experts.css'
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: "Mkasis Smith", img: expert1 },
    { id: 2, name: "Qiurn Smith", img: expert2 },
    { id: 3, name: "Erythk Smith", img: expert3 },
    { id: 4, name: "Mislask Smith", img: expert4 },
    { id: 5, name: "Crosses Smith", img: expert5 },
    { id: 6, name: "Dane Smith", img: expert6 },
]

const Experts = () => {
    return (
        <div id={'expert'} className='container'>
            <h1 className='text-primary text-center m-5'>Experts</h1>
            <div className="row ">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;