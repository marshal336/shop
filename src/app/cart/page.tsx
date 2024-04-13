'use client'

import Link from 'next/link';
import styles from './CartPage.module.scss'
import { useSelector } from 'react-redux';
import { selectPost } from '~/redux/reducers/post';

function CartPage(){
    const items  = useSelector(selectPost)
    console.log(items)
    return(
        <div>

            <div>
                <ul className={styles['about-breadcrumbs']}>
                    <Link href={'/'}><li className={styles['about-breadcrumbs-link']}>Home</li></Link>
                    <span>/</span>
                    <li>Cart</li>
                </ul>
            </div>

            <div className={styles['cart-table']}>
                <div >
                    <ul className={styles['cart-header']}>
                        <li>Product</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Subtotal</li>
                    </ul>
                    <ul className={styles['cart-header']}>
                        <li><img src={items?.logo}/></li>
                        <li>${items?.prices[0]}</li>
                        <li ><input type="number" value={items?.count} className='w-11 flex justify-center items-center p-2 border'/></li>
                        <li>${items?.prices[0]}</li>
                    </ul>
                </div>

                
            </div>
            <div className={styles['cart-sum']}>
            <button><Link href='/'>Return To Shop</Link></button>
            <div className={styles['cart-total']}>
                <h2>Cart Total</h2>
                <div>
                    <div className={styles['cart-total-detail']}>
                        <h3>Subtotal:</h3>
                        <span>$1750</span>
                    </div>
                    <div className={styles['cart-total-detail']}>
                        <h3>Shipping:</h3>
                        <span>Free</span>
                    </div>
                    <div className={styles['cart-total-detail']}>
                        <h3>Total:</h3>
                        <span>$1750</span>
                    </div>
                    <button>Process to checkout</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CartPage;