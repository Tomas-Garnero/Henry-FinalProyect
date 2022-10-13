import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import styles from "./CheckoutForm.module.css"
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Spinner from './Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function CheckoutForm({product}) {

    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [userId, setUserId] = useState(JSON.parse(localStorage?.getItem('profile')).data.id);
    console.log(userId)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        setLoading(true)

        if(!error && product.stock > 0) {
            const { id } = paymentMethod
            try {
                const {data} = await axios.post('/api/checkout', {
                id,
                amount: product.price * 100,
                description: product.description
            })
            Swal.fire({
                title: 'Payment done', 
                text: data.message, 
                icon: 'success',
                timer: 5000
            });
            /* product.stock-- */
            elements.getElement(CardElement).clear()
            }
            catch(error) {
                Swal.fire({
                    title: 'Payment failed', 
                    text: error.response.data, 
                    icon: 'error',
                    timer: 5000
                });
            }
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
                <CardElement className={styles.buyInputs} />
                {loading ? 
                <Spinner />
            : 
            <div>
            <button type='submit' className={styles.buyButton}>
                CONFIRM
            </button>
            </div>
            }
        </form>
    )
}