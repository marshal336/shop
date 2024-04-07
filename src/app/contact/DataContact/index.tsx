//styles
import styles from '../Contact.module.scss'

//icons
import { LuPhone } from "react-icons/lu";
import { GoMail } from "react-icons/go";



export const DataContact=()=>{
    return(
        <div className={styles['contact-info']}>
            <div className={styles['box']}>
            <div className={styles['box-title']} >
                <div className={styles['circle']}>
                    <LuPhone />
                </div>
                <h2>Call to us</h2>
            </div>
            <div className={styles['box-additional-info']}>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
            </div>
            </div>

            <span />

            <div className={styles['box']}>
            <div className={styles['box-title']} >
                <div className={styles['circle']}>
                <GoMail />
                </div>
                <h2>Write To US</h2>
            </div>
            <div className={styles['box-additional-info']}>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
            </div>
            </div>
        </div>
    )
}