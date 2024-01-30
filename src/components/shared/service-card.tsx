
import Image from 'next/image';

export const ServiceCard = ({ title, description }: { title: String, description: String }) => {
    return (
        <div className="card w-70 shadow-xl  bg-custom-brandColor p-6">
            <div className=''>
            <Image width={40} height={40} src={'images/monitoring-icon.svg'} alt='card-logo' />
            </div>
            <div className="card-body p-0 m-0">
                <h2 className="card-title  text-custom-serviceTitleColor font-medium">{title}</h2>
                <p className='m-0'>{description}</p>

            </div>
            <div className='pt-8'>
                <Image
                className=' rounded-2xl w-full'
                 width={300} height={150} src={'images/serviceCard1-pic.svg'} alt='icon'/>
            </div>
        </div>
    );
}

export default ServiceCard;
