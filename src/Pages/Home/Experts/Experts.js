import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts=[
    {id:1,name:'Will Smith', img:expert1},
    {id:2,name:'Chirs Rock', img:expert2},
    {id:3,name:'Dwyne Man', img:expert3},
    {id:4,name:'Tushar Br', img:expert4},
    {id:5,name:'Hum man', img:expert5},
    {id:6,name:'Trui mur', img:expert6}
]

const Experts = () => {
    return (
        <div id='experts' className='container '>
            <h2 className='text-center text-primary my-5'>Our Experts</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    experts.map(
                        expert=><Expert
                       key={ expert.id}
                       expert={ expert}
                        ></Expert>
                    )
                }
            </div>
        </div>
    );
};

export default Experts;