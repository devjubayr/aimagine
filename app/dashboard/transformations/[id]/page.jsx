import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

import { getImageById } from "@/actions/image.actions";
import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation";
import Header from "@/components/shared/Header";
import TransformedImage from "@/components/shared/TransformedImage";
import { getImageSize } from "@/utils/getImageSize";
import { EditIcon } from "lucide-react";
import Link from "next/link";

const ImageDetails = async ({ params }) => {
  const { id } = await params;

  const { userId } = await auth();

  const image = await getImageById(id);

  return (
    <>
      {userId === image.author.clerkId && (
        <div className="mt-4 flex justify-end gap-4">
          <button asChild type="button" title="update">
            <Link href={`/dashboard/transformations/${image._id}/update`}>
              <EditIcon />
            </Link>
          </button>

          <DeleteConfirmation imageId={image._id} />
        </div>
      )}
      <Header title={image.title} />

      <section className="mt-5 flex flex-wrap gap-4">
        <div className="p-14-medium md:p-16-medium flex gap-2">
          <p className="text-dark-600">Transformation:</p>
          <p className=" capitalize text-purple-400">
            {image.transformationType}
          </p>
        </div>

        {image.prompt && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2 ">
              <p className="text-dark-600">Prompt:</p>
              <p className=" capitalize text-purple-400">{image.prompt}</p>
            </div>
          </>
        )}

        {image.color && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Color:</p>
              <p className=" capitalize text-purple-400">{image.color}</p>
            </div>
          </>
        )}

        {image.aspectRatio && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Aspect Ratio:</p>
              <p className=" capitalize text-purple-400">{image.aspectRatio}</p>
            </div>
          </>
        )}
      </section>

      <section className="mt-10 border-t border-dark-400/15">
        <div className="transformation-grid">
          {/* MEDIA UPLOADER */}
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold text-dark-600">Original</h3>

            <Image
              height={getImageSize(image.transformationType, image, "height")}
              width={getImageSize(image.transformationType, image, "width")}
              src={image.securedUrl}
              alt="image"
              className="transformation-original_image"
            />
          </div>

          {/* TRANSFORMED IMAGE */}
          <TransformedImage
            image={image}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            transformationConfig={image.config}
            hasDownload={true}
          />
        </div>
      </section>
    </>
  );
};

export default ImageDetails;
