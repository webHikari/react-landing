import styles from './Cash.module.css'

import {Link} from 'react-router-dom'

export default function Cash() {
  return(
    <>
      <div className={styles.Hero}> 
        <div className={styles.HeroLogo} onClick={e => window.location.href="/"}>
          <h1>CHIMERA</h1> 
        </div>
        <div className={styles.HeroOptions}>
          <div className={styles.FullOption}>
            <h1>Обналичивание</h1>
            <h3>Обнал любого происхождения.</h3>
            <ul>
              <li data-icon="☑️ ">Прием ООО/ИП НДС, без НДС.</li>
              <li data-icon="☑️ ">ЗСК, реальные компании, с высокими оборотами</li>
              <li data-icon="☑️ ">Быстро закрываем УПД. СМР, ГСМ, Стройка, Молочка, Сельхоз.</li>
            </ul>
            <h3>Большой выбор гео. Нал день в день.</h3>
            <ul>
              <li data-icon="💸 ">Физ / Карты</li>
              <li data-icon="💸 ">Cash in</li>
              <li data-icon="💸 ">Инкассация</li>
              <li data-icon="💸 ">Курьеры</li>
              <li data-icon="💸 ">Мерч / Инвойс</li>
              <li data-icon="💸 ">Эквайринг</li>
              <li data-icon="💸 ">Сим-карты</li>
            </ul>
            <h3>Почему наш сервис?</h3>
            <ul role="list">
              <li data-icon="☑️ ">Есть собственный сайт сервиса</li>
              <li data-icon="☑️ ">Более 350 отзывов</li>
              <li data-icon="☑️ ">Работа через гаранта</li>
              <li data-icon="☑️ ">Прогретые счета топовых банков</li>
              <li data-icon="☑️ ">Хороший процент при постоянной работе</li>
              <li data-icon="☑️ ">Оперативный вывод средств</li>
              <li data-icon="☑️ ">Подготовим материал под вас в любой стране(условия обсудим)</li> 
            </ul>
            <h3>Сделаем интернет магазин, инвойс, эквайринг, под ваше направление.</h3>
            <h3>Мы действительно знаем что такое обнал, поможем в разных ситуациях, как не столкнуться с 115 ФЗ, как вывести из страны или внутри страны.</h3>
            <a href="https://t.me/Money_Chimera" className={styles.Communication}>Связь</a>
         </div>
        </div>
      </div> 
    </>
  );
}
