import {motion} from 'framer-motion'
import { Button } from 'react-bootstrap'

function Profile() {
    const profilePict = "https://cdn.discordapp.com/attachments/811955187554975795/972764112583028794/VOC.png"
    return (<>
    
    
    <div className="row justify-content-center">

<div className="col-10 row justify-content-center mt-5 p-3 text-center">
        <div className="col-md-6 text-center text-md-end mb-3 px-5">
            <img src={profilePict} layout="fill" className='img-thumbnail logo shadow-lg rounded-circle avatar' alt="" />
        </div>
        {/* <div className="col-md-6 row text-center text-md-start">
            <div className="col-12">
                <span className='fs-1 fw-bold'>
                    Hi There! 👋
                    <br />
                    We&apos;re <span className="text-blue">VOC</span>
                </span>
            </div>
            <hr className='col-md-12' />
        </div> */}
        <div className="col-md-6 row justify-content-center justify-content-md-start text-center text-md-start">
            <div className="col-12 px-0 mb-3">
                    <span className='fs-1  my-text fw-bold'>
                        Hi There! 👋
                        <br />
                        We&apos;re <span className="text-blue">VOC</span>
                    </span>                
            </div>
            <hr className='my-text col-lg-7' />
            <div className="col-12 mx-0 p-0">
                <p className="my-text">Virtual On Community&apos;s <span className="fw-bold text-blue">Server</span></p>
            </div>
            <div className="row col-12 col-lg-7 justify-content-center">
                    <motion.a href='https://discord.gg/jBNtE68Qcc' whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='col-12 btn btn-primary'> <i className='bi bi-discord'></i> Join our comunity</motion.a>
            </div>            
        </div>

</div>

</div>
    
    
    
    </>)
}

export default Profile