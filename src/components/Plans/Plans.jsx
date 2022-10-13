import React from 'react';
import './Plans.css';
import { plans, plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>

            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>PRONTO PARA COMEÇAR</span>
                <span>A SUA JORNADA</span>
                <span className='stroke-text'>CONNOSCO</span>
            </div>

            {/* plans card */}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>€ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>Veja mais benefícios -></span>
                        </div>
                        <button className='btn'>Juntar-se agora</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;