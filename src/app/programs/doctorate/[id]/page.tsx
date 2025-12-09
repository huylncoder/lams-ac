import { notFound } from "next/navigation";
import ProgramDetail from "../../../../components/Programs/ProgramDetail";
import programDetails from "../../../../data/programDetails.json";

export const generateStaticParams = () => {
    return [{ id: "dba" }];
};

export const generateMetadata = ({ params }: { params: { id: string } }) => {
    const program = programDetails.doctorate[params.id as keyof typeof programDetails.doctorate];
    if (!program) {
        return { title: "Program Not Found" };
    }
    return {
        title: `${program.title} — LAMS`,
        description: program.description,
    };
};

export default function DoctorateProgramPage({ params }: { params: { id: string } }) {
    const program = programDetails.doctorate[params.id as keyof typeof programDetails.doctorate];

    if (!program) {
        notFound();
    }

    return (
        <ProgramDetail
            title={program.title}
            subtitle={program.subtitle}
            description={program.description}
            fullDescription={program.description}
            image={program.image}
            sections={program.sections}
            categoryTitle="Doctorate"
            categoryLink="/programs/doctorate"
        />
    );
}
