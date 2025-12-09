import { notFound } from "next/navigation";
import ProgramDetail from "../../../../components/Programs/ProgramDetail";
import programDetails from "../../../../data/programDetails.json";

export const generateStaticParams = () => {
    return [{ id: "bba" }];
};

export const generateMetadata = ({ params }: { params: { id: string } }) => {
    const program = programDetails.undergraduate[params.id as keyof typeof programDetails.undergraduate];
    if (!program) {
        return { title: "Program Not Found" };
    }
    return {
        title: `${program.title} — LAMS`,
        description: program.description,
    };
};

export default function UndergraduateProgramPage({ params }: { params: { id: string } }) {
    const program = programDetails.undergraduate[params.id as keyof typeof programDetails.undergraduate];

    if (!program) {
        notFound();
    }

    return (
        <ProgramDetail
            title={program.title}
            subtitle={program.subtitle}
            description={program.description}
            fullDescription={program.fullDescription}
            image={program.image}
            sections={program.sections}
            categoryTitle="Undergraduate"
            categoryLink="/programs/undergraduate"
        />
    );
}
