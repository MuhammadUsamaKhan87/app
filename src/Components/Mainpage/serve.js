import img from './images/f1.avif'
import img2 from './images/f2.avif'
import img3 from './images/f3.avif'
import './Main.css'


const serve = () => {
    return (
        <>
            <div className='Amz_main'>
                <div className='title'>
                    <h1 className='Amz_h1'>Customer </h1>
                    <p className='Amz_h2'>LOVE US.</p>
                </div>
                <div className='azm_card'>
                    <div className='azm_card_n'>
                        <img src={img} className='Azm_img' />
                        <h1>Customer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <a href=''>Learn more ....</a>
                    </div>
                    <div className='azm_card_n'>
                        <img src={img2} className='Azm_img' />
                        <h1>Customer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <a href=''>Learn more ....</a>
                    </div>
                    <div className='azm_card_n'>
                        <img src={img3} className='Azm_img' />
                        <h1>Customer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div >

            </div >
        </>
    )
}

export default serve