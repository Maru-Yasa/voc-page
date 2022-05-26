import {motion} from 'framer-motion'
import { Button } from 'react-bootstrap'

function Profile() {
    const profilePict = "https://cdn.discordapp.com/attachments/811955187554975795/972764112583028794/VOC.png"
    return (<>
    
    
    <div className="row justify-content-center">

<div className="col-10 row justify-content-center mt-5 p-3 text-center">
        <div className="col-md-6 text-center text-md-end mb-3 px-5">
            <img src={profilePict} layout="fill" className='img-thumbnail logo shadow rounded-circle avatar' alt="" />
        </div>
        <div className="col-md-6 text-center text-md-start">
            <span className='fs-1  my-text fw-bold'>
                Hi There! 👋
                <br />
                We&apos;re <span className="text-blue">VOC</span>
            </span>
            <br />
            <hr className="my-text col-md-6" />
            <p className="my-text">Virtual On Community&apos;s <span className="fw-bold text-blue">Server</span></p>
            <div className="mt-3 row col-12 col-md-7 justify-content-center">
                    <motion.a href='https://discord.gg/jBNtE68Qcc' whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='d-block btn btn-primary'> <i className='bi bi-discord'></i> Join our comunity</motion.a>
            </div>            
        </div>

</div>

</div>
    
    
    
    </>)
}

export default Profile