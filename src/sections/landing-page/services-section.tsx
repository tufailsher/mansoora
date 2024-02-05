
import SectionHeader from "@/components/shared/section-header";
import LargeSectionHeader from "@/components/shared/large-section-header";
import ServiceCard from "@/components/shared/service-card";
import ServiceCard2 from "@/components/shared/service-card2";

export const ServicesSeciton = () => {
    const serviceCardText = 'Est minima repellendus in dolor dolorum aut assumenda ullam et voluptates numquam qui aliquam perspiciatis ad neque ullam. Qui sequi porro in tempore nemo et itaque eligendi qui iusto saepe et suscipit sint et pariatur dolor.'
    const serviceCardText2 = 'Est minima repellendus in dolor dolorum aut assumenda ullam et voluptates numquam qui aliquam perspiciatis ad neque ullam.';
    return (
        <div>
            <div className="pt-12  pb-6 flex justify-center">
                <SectionHeader title='| Our Services' />
            </div>

            <div className="pb-12 flex justify-center">
                <LargeSectionHeader title='Our Medical Services' />
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-20 md:grid-cols-2 grid-cols-1 md:gap-10 gap-16 md:mx-32 mx-3">
                <ServiceCard title='On Clinic Monitoring' description={serviceCardText} />
                <ServiceCard2 title={
                    <>Online <br /> Monitoring</>
                } description={serviceCardText2} />
                <ServiceCard title='Top Medicines ' description={serviceCardText} />
            </div>
        </div>

    );
}

export default ServicesSeciton;
