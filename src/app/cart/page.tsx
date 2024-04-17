'use client'

import Link from 'next/link';
import styles from './CartPage.module.scss'
import { useAppSelector } from '~/redux/store';
import { MdCancel } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteItem } from '~/redux/reducers/post';

function CartPage() {
    const dispatch = useDispatch()
    const { post: items, totalPrice } = useAppSelector(state => state.post)

    const handleDeleteFromCard=(id:number)=>{
        dispatch(deleteItem(id))
    }

    if(!items) {
        return <h1 className='text-center'>Loading....</h1>
    }
    return (
        <div>

            <div>
                <ul className={styles['about-breadcrumbs']}>
                    <Link href={'/'}><li className={styles['about-breadcrumbs-link']}>Home</li></Link>
                    <span>/</span>
                    <li>Cart</li>
                </ul>
            </div>

            {items.length ? (
                <>
                <div className={styles['cart-table']}>
                <div >
                    <ul className={styles['cart-header']}>
                        <li>Product</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        {/* <li>Subtotal</li> */}
                    </ul>
                    {items.map((item) => {
                        return (
                            <ul className={styles['cart-header']} key={item.id}>
                                <li className={styles['cart-logo']}><span><MdCancel onClick={()=>handleDeleteFromCard(item.id)} /></span><img src={item.logo} /></li>
                                <li>${item.prices}</li>
                                <li className='flex justify-center items-center border border-black/30 px-3 rounded-md'>{item.count}</li>
                            </ul>
                        )
                    })}

                </div>

            </div>
            <div className={styles['cart-sum']}>
                <button><Link href='/'>Return To Shop</Link></button>
                <div className={styles['cart-total']}>
                    <h2>Cart Total</h2>
                    <div>
                        <div className={styles['cart-total-detail']}>
                            <h3>Shipping:</h3>
                            <span>Free</span>
                        </div>
                        <div className={styles['cart-total-detail']}>
                            <h3>Total:</h3>
                            <span>${totalPrice}</span>
                        </div>
                        <button>Process to checkout</button>
                    </div>
                </div>
            </div>
            </>
            // eslint-disable-next-line react/no-unescaped-entities
            ): <h2 className='text-center'>You didn't add any product to cart :(</h2>}
        </div>
    )
}

export default CartPage;