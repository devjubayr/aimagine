import { getAllImages } from "@/actions/image.actions";
import { Collection } from "@/components/shared/Collection";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const searchQuery = params?.query || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <section className="sm:mt-12">
      <Collection
        hasSearch={true}
        images={images.data}
        totalPages={images.data.totalPages}
        page={page}
      />
    </section>
  );
}
