import { motion } from 'framer-motion'
export default function AdminComponent(){

    const admins = [
        {
            img : "https://cdn.discordapp.com/avatars/873167047796879400/e1d28bcfae0ee0c273ef5214bc6c336a.png?size=4096",
            name : "Maru Yasa",
            moto : "Kerja kerja kerja",
            role : "Resident / Developer"
        },
        {
            img : "https://cdn.discordapp.com/avatars/816867378587238400/ba419efa8385ee4f2c76e6cf351c4eb1.png?size=4096",
            name : "Ishiyami",
            moto : "ngocok ngocok ngocok",
            role : 'Owner'
        },
        {
            img : "https://cdn.discordapp.com/avatars/815963338092838966/fb3810e36fce9d27b109c2bc4513eec6.png?size=4096",
            name : "Harry Pottah",
            moto : "realitivity theory is my fetish",
            role : "Resident"
        },
        {
            img : "https://cdn.discordapp.com/avatars/834725820387819550/3d0e295cd0109d1128b3e42c22c361f0.png?size=4096",
            name : "Rain",
            role : "Resident",
            moto : "Pukul Pedo"
        }

    ]

    return (<>
    
        
        <div className="row justify-content-center my-5">

            <motion.div className="col-md-9 row justify-content-center my-card px-5 py-4">
                <h1 className="text-blue mb-5 fw-bold"> <i className="bi bi-people-fill"></i> Admin List</h1>

                {admins.map((admin, index) => {
                    return (
                        <div key={index} data-aos="fade-up" className="card my-3 mx-2 my-card my-bg border-0 p-0 col-md-3">
                            <img src={admin.img} className='m-0 card-img-top rounded admin-img' alt="" />
                            <div className="card-body">
                                <div className="my-2">
                                    <span className="badge bg-blue rounded-pill">
                                        {admin.role}
                                    </span>
                                </div>
                                <div className="card-title fw-bold">{admin.name}</div>
                                <p>{admin.moto}</p>
                            </div>
                        </div>                        
                    )
                })}

            
            </motion.div>

        </div>
    
    
    </>)

}