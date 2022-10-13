import React, { useRef } from "react";
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iaeqnjg', 'template_pwqk7wq', form.current, '60I2XlCW4ZyNimZGd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">PRONTO PARA</span>
                    <span> ELEVAR</span>
                </div>
                <div>
                    <span>O SEU CORPO</span>
                    <span className="stroke-text"> CONNOSCO?</span>
                </div>

            </div>

            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Coloque o seu email" />
                    <button className="btn btn-join">Juntar-se agora</button>
                </form>
            </div>
        </div>
    );
}

export default Join;