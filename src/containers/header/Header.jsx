import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> Let's Build Somthing amazing with GPT-3 Open AI</h1>
        <p>Algum texto escrito aqui para descrever a marca ou o produto!</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='O seu e-mail' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1.600 pessoas já utilizam o nosso serviço!</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
      </div> 
    </div>
  )
}

export default Header