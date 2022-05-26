import { motion } from 'framer-motion'

export default function RulesComponent(){

    return (<>
    
        <div className="row justify-content-center mt-5">
            
            <motion.div data-aos="fade-up" className="col-md-9 row justify-content-center my-bg my-card px-5 py-4">
                <h1 className="text-blue fw-bold"> <i className="bo bi-paperclip"></i> Server Rules</h1>
                <div className="col-12 mt-3">
                    <p>                        
                    1.Menghormati dan menghargai sesama member.
                    <br />
                    2.Dilarang mengirim link scam atau yang bersifat mencuri informasi pribadi member.
                    <br />
                    3.Dilarang spam.
                    <br />
                    4.Gunakan channel sesuai fungsinya.
                    <br />
                    5.Dilarang melakukan promosi server discord tanpa seizin admin/moderator.
                    <br />
                    6.Dilarang membahas atau memposting yang mengandung pornografi atau NSFW/NSFL di tempat yang tidak seharusnya.
                    <br />
                    7.Dilarang melakukan sesuatu yang tidak menyenangkan selama di voice room.
                    <br />
                    8.Yang membahas politik,pemerintahan diluar ataupun di dalam negeri akan terancam kick
                    <br/>
                    9.Bercanda seala kadarnya atau jangan berlebihan.
                    <br />
                    10.Tidak diizinkan membawa nama server ini dengan niat membuat kerusuhan di server lain.
                    </p>
                </div>
            </motion.div>

        </div>
    
    </>)

}