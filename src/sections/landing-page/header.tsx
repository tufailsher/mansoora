import Image from 'next/image';

function AppHeader() {
    return (
        <div className='w-full'>
        <div className=" bg-image-full bg-[url('/images/header-bg.svg')]">
            <BgAppHeader />
        </div>
        </div>
    );
}
export default AppHeader;

const BgAppHeader = () => {
    return (
        <div className='lg:w-3/4 py-8'>
            <div className=" w-full text-lg text-white">
                <h1 className=' text-3xl'>
                    <strong>Mansoora</strong> Homeopathic <br /> Clinic & Pharmacy
                </h1>
                <br />
                <p className=" font-extralight">
                    Homeopathy is a safe gentle and natural system of healing that works with your body to relieve symptoms, restore itself, and improve your overall health.
                    Have faith in nature.
                </p>
                <div className=" md:w-3/4 grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-12">
                    <ReviewCounnter title='355+' subtitle='Recoverd Patients' />
                    <ReviewCounnter title='98%' subtitle='Good Review' />
                    <ReviewCounnter title='6300+' subtitle='Satisfied Patients' />
                </div>
            </div>
        </div>
    );
}


const ReviewCounnter = ({ title, subtitle }: { title: String, subtitle: String }) => {
    return (
        <div className="card bg-base-100  shadow-xl text-black p-4">
            <div className=" !p-0">
                <h2 className="card-title !p-0 !m-0">{title}</h2>
                <p className=" !p-0 !m-0 text-custom-buttonColor">{subtitle}</p>
            </div>
        </div>
    );
}
