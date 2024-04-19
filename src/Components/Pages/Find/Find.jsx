import styles from './Find.module.css'

import {Link} from 'react-router-dom'

export default function Find() {
  return(
    <>
      <div className={styles.Hero}> 
        <div className={styles.HeroLogo} onClick={e => window.location.href="/"}>
          <h1>CHIMERA</h1> 
        </div>
        <div className={styles.HeroOptions}>
          <div className={styles.FullOption}>
            <h1>Услуги пробива номеров, банков, судимости, по всем направлениям:</h1>
            <h3>📄 Пробив по номеру человека по всем операторам:</h3>
              <p>Паспортные данные, СНИЛС, ИИН, ФИО, Дата рождения, Выписка местожительства.</p>
            <h3>📰 Полный пробив по номеру:</h3>
            <p>Паспортные данные, ФИО, Дата рождения, Выписка местожительства, СНИЛС-ИИН, все номера зарегистрированные на человека, имел ли судимости,  Загс, место работы, +бонусом всей семье так же, и проходит ли по криминалу по Базе МВД, ФСБ, ГИБДД.</p>
            
            <h3>🚨 Проверка ОРМ находитесь ли вы в разработке (интересуются ли вами службы) в настоящее время по ФСБ, ГИБДД, МВД,  +бонусом проходит ли по криминалу, имел ли судимость  </h3>
            <h3>💳 Пробив по всем Банковским счетам (Сбер, Тинькофф, Qiwi, Мтс, Втб т.д, узнавать в лс) </h3>
            
            <p>На кого оформлен, Паспортные данные, номер, баланс, история пополнение-переводов</p>

            <h3>🌐 Вспышка номера(узнать точные координаты в приделе 50-500 метров) </h3>
            <h3>❗️По остальным вопросам, услуг пробива уточняйте в личке.</h3>
            <a href="https://t.me/Punching_Chimera" className={styles.Communication}>Связь</a>
         </div>
        </div>
      </div> 
    </>
  );
}
