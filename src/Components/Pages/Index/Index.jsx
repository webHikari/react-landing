import styles from './Index.module.css'

import {Link} from 'react-router-dom'

export default function Index() {
  return(
    <>
      <div className={styles.Hero}> 
        <div className={styles.HeroLogo}><h1>CHIMERA</h1></div>
        <div className={styles.HeroOptions}>
          <div className={styles.Option}>
            <h1>Обналичивание</h1>
            <p>Обнал любого происхождения.</p>
            <ul>
              <li>Прием ООО/ИП НДС, без НДС.</li>
              <li>ЗСК, реальные компании, с высокими оборотами</li>
              <li>Быстро закрываем УПД. СМР, ГСМ, Стройка, Молочка, Сельхоз.</li>
            </ul>
            <p>Большой выбор гео. Нал день в день.</p>
            <div className={styles.CardBottom}>
              <Link to="/cash" className={styles.AboutLink}>Прочитать подробнее</Link>
              <a href="/" className={styles.Communication}>Связь</a>
            </div>
          </div>
          <div className={styles.Option}> 
            <h1>Изготовление документов</h1>
            <ul>
              <li>Паспорта и ID карты</li>
              <li>Дипломы и аттестаты</li>
              <li>Документы на машину, водительские удостоверения различных стран</li>
              <li>Корочки государственных структур</li>
              <li>Медицинские рецепты</li>
              <li>Сертификат о вакцинации от COVID-19 с официальной проводкой</li>
              <li>Нотариальные доверенности</li>
              <li>Свидетельства</li>
            </ul>
            <div className={styles.CardBottom}>
              <Link to="/docs" className={styles.AboutLink}>Прочитать подробнее</Link>
              <a href="/" className={styles.Communication}>Связь</a>
            </div>
          </div>
          <div className={styles.Option}>
            <h1>Услуги пробива</h1>
            <p>Услуги пробива номеров, банков, судимости, по всем направлениям:</p>
            <ul>
              <li>Полный пробив по номеру человека по всем операторам</li>
              <li>Проверка ОРМ на интерес со стороны служб</li>
              <li>Пробив по всем банковским счетам</li>
              <li>Вспышка номера</li>
            </ul> 
            <div className={styles.CardBottom}>
              <Link to="/find" className={styles.AboutLink}>Прочитать подробнее</Link>
              <a href="/" className={styles.Communication}>Связь</a>
            </div>
         </div>
        </div>
      </div> 
    </>
  );
}
