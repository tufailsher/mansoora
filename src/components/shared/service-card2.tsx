
import Image from 'next/image';

export const ServiceCard2 = ({ title, description }: { title: React.ReactNode, description: String }) => {
    return (
        <div className="card w-70 shadow-xl  bg-custom-serviceCard2Color p-6">
           
            <div className='pb-8'>
                <Image
                className=' rounded-2xl w-full'
                 width={300} height={150} src={'images/serviceCard1-pic.svg'} alt='icon'/>
            </div>
            <div className="card-body p-0 m-0">
                <h2 className="card-title  text-custom-serviceTitleColor font-medium">{title}</h2>
                <p className='m-0'>{description}</p>

            </div>
        </div>
    );
}

export default ServiceCard2;
