// app/campus-life/Clubs/[slug]/page.tsx (Server Component)
import { clubs } from "../ClubData";
import {ClubDetail} from "./ClubDetail";

export async function generateStaticParams() {
    return clubs.map((club) => ({
        slug: club.slug,
    }));
}

export default function Page({ params }: { params: { slug: string } }) {
    const club = clubs.find((item) => item.slug === params.slug);

    if (!club) {
        return <div>Club not found</div>;
    }

    return <ClubDetail club={club} />;
}
