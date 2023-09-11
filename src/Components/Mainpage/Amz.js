import img from './images/Homecare.jpg'
import img2 from './images/rchef.jpg'
import img3 from './images/cl.avif'
import './Main.css'


const Amz = () => {
    return (
        <>
            <div className='Amz_main'>
                <div className='title'>
                    <h1 className='Amz_h1'>Amazing </h1>
                    <p className='Amz_h2'>Services.</p>
                </div>
                <div className='azm_card'>
                    <div className='azm_card_n'>
                        <img src={img} className='Azm_img' />
                        <h1>230+ Location</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        <a href=''>Learn more ....</a>
                    </div>
                    <div className='azm_card_n'>
                        <img src={img2} className='Azm_img' />
                        <h1>Best Chef</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        <a href=''>Learn more ....</a>
                    </div>
                    <div className='azm_card_n'>
                        <img src={img3} className='Azm_img' />
                        <h1>Birthday</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        <a href=''>Learn more ....</a>
                    </div>
                </div >

            </div >
        </>
    )
}

export default Amz