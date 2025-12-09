import { notFound } from "next/navigation";
import ProgramDetail from "../../../../components/Programs/ProgramDetail";
import programDetails from "../../../../data/programDetails.json";

export const generateStaticParams = () => {
    return [{ id: "mba" }];
};

export const generateMetadata = ({ params }: { params: { id: string } }) => {
    const program = programDetails.postgraduate[params.id as keyof typeof programDetails.postgraduate];
    if (!program) {
        return { title: "Program Not Found" };
    }
    return {
        title: `${program.title} — LAMS`,
        description: program.description,
    };
};

export default function PostgraduateProgramPage({ params }: { params: { id: string } }) {
    const program = programDetails.postgraduate[params.id as keyof typeof programDetails.postgraduate];

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
            categoryTitle="Postgraduate"
            categoryLink="/programs/postgraduate"
        />
    );
}
