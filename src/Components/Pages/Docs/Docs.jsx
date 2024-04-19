import styles from './Docs.module.css'

import {Link} from 'react-router-dom'

export default function Docs() {
  return(
    <>
      <div className={styles.Hero}> 
        <div className={styles.HeroLogo} onClick={e => window.location.href="/"}>
          <h1>CHIMERA</h1> 
        </div>
        <div className={styles.HeroOptions}>
          <div className={styles.FullOption}>
            <h1>Изготовление документов</h1>
            <h3>Паспорта и ID карты:</h3>
            <div className={styles.HalfOption}>
              <ul>
                <li data-icon="🇷🇺 ">Россия</li>
                <li data-icon="🇭🇺 ">Венгрия</li>
                <li data-icon="🇸🇰 ">Словакия</li>
                <li data-icon="🇨🇿 ">Чехия</li>
              </ul>
              <ul>
                <li data-icon="🇺🇸 ">США</li>
                <li data-icon="🇵🇱 ">Польша</li>
                <li data-icon="🇷🇴 ">Румыния</li>
              </ul>
            </div>
            <h3>Дипломы и аттестаты:</h3>
            <ul>
              <li data-icon="📌 ">Аттестат за 9 и 11 класс </li>
              <li data-icon="📌 ">Среднее техническое </li>
              <li data-icon="📌 ">Диплом о высшем образовании </li>
              <li data-icon="📌 ">Апостили</li>
            </ul>
            <h3>Документы на машину: </h3>
            <ul role="list">
              <li data-icon="👤">Водительское удостоверение различных стран </li>
              <li data-icon="👤">СТС</li>
              <li data-icon="👤">ПТС</li>
              <li data-icon="👤">Права на водный транспорт </li>
              <li data-icon="👤">ВУ на спец.технику</li>
              <li data-icon="👤">Судовые билеты </li>
              <li data-icon="👤">ДОПОГ</li> 
              <li data-icon="👤">Любые гос.номера </li>
            </ul>
            <h3>Корочки государственных структур:</h3>
            <div className={styles.HalfOption}>
              <ul>
                <li data-icon="👮‍♂️ ">МВД</li>
                <li data-icon="👮‍♂️ ">СКР</li>
                <li data-icon="👮‍♂️ ">МУР</li>
                <li data-icon="👮‍♂️ ">ФСИН</li>
              </ul>
              <ul>
                <li data-icon="👮‍♂️ ">ФНС</li>
                <li data-icon="👮‍♂️ ">ФМС</li>
                <li data-icon="👮‍♂️ ">ФССП</li>
                <li data-icon="👮‍♂️ ">РОСГВАРДИЯ</li>
              </ul>
            </div>
            <br />
            <ul>
              <li data-icon="👮‍♂️ ">Администрация президента </li>
              <li data-icon="👮‍♂️ ">Удостоверение судьи</li>
              <li data-icon="👮‍♂️ ">Удостоверение адвоката </li>
              <li data-icon="👮‍♂️ ">Пенсионные удостоверения структур </li>
            </ul>
            <h3>Медицинские рецепты под любой регион!</h3>
            <h3>Сертификат о вакцинации от Covid-19 с официальной проводкой:</h3>
            <div className={styles.HalfOption}>
              <ul>
                <li>🇷🇺РФ🇷🇺</li>
                <li>🇪🇺ЕС 🇪🇺</li>
                <li>🇺🇦УК 🇺🇦</li>
              </ul>
              <ul>
                <li>Пфайзер</li>
                <li>Астра</li>
                <li>Модерна</li>
              </ul>
            </div>
            <h3>Нотариальные доверенности</h3>
            <h3>Свидетельства:</h3>
            <ul>
                <li data-icon="📜 ">Свидетельство о рождении </li>
                <li data-icon="📜 ">Свидетельство о смерти </li>
                <li data-icon="📜 ">Свидетельство о расторжении брака </li>
                <li data-icon="📜 ">Свидетельство о заключении брака</li>
              </ul>
            <a href="https://t.me/Document_Chimera" className={styles.Communication}>Связь</a>
         </div>
        </div>
      </div> 
    </>
  );
}
