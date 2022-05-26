import { motion } from 'framer-motion'

export default function AboutComponent(){

    return (<>
    
        <div className="row justify-content-center mt-5">
            
            <div data-aos="fade-up" className="col-10 col-md-9 row justify-content-center my-bg my-card px-5 py-4">
                <h1 className="text-blue fw-bold"> <i className="bo bi-paperclip"></i> About</h1>
                <div className="col-12 mt-3">
                    <p>
                    VOC adalah singkatan dari "virtual on community" yang didirikan oleh @Resident.Dimana Server ini merupakan sarana komunikasi antar sesama pribumi baik secara langsung melalui suara/video  dengan voice channel ataupun dengan text.
                    Server disini kalian bebas asalkan mematuhi 📜・rules.
                    </p>
                </div>
            </div>

        </div>
    
    </>)

}