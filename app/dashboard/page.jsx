import { getAllImages } from "@/actions/image.actions";
import { getUserById } from "@/actions/user.actions";
import { Collection } from "@/components/shared/Collection";
import { auth } from "@clerk/nextjs/server";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const searchQuery = params?.query || "";

  const { userId } = await auth();
  const user = await getUserById(userId);

  const images = await getAllImages({ page, searchQuery });

  return (
    <section className="sm:mt-12">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
          Welcome,{" "}
          <span className="bg-gradient-to-r from-white to-text-gray bg-clip-text text-transparent">
            {user.firstName}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-text-gray leading-relaxed">
          Browse through recently edited images and creative projects.
        </p>
      </div>
      <Collection
        hasSearch={true}
        images={images.data}
        totalPages={images.data.totalPages}
        page={page}
      />
    </section>
  );
}
