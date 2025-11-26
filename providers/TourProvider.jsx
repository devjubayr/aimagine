import { tourDone } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { TourProvider, useTour } from "@reactour/tour";
const steps = [
  {
    dashboard: [
      {
        selector: ".brand-logo",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">Brand Logo</h2>
            <p className="text-muted-foreground">
              Click the official logo to instantly return to the Home page.
            </p>
          </div>
        ),
      },
      {
        selector: ".notification-btn",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">Notification</h2>
            <p className="text-muted-foreground">
              This button will show all your latest alerts and important
              updates. Currently, this feature is under development.
            </p>
          </div>
        ),
      },
      {
        selector: ".home-page",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">
              Dashboard Overview Page
            </h2>
            <p className="text-muted-foreground">
              This main page shows your current activity, and community created
              products. (Features coming..)
            </p>
          </div>
        ),
      },
      {
        selector: ".image-restore-page",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">Restore Image Page</h2>
            <p className="text-muted-foreground">
              Use this tool to upload and repair old or low-quality images,
              restoring them to high quality.
            </p>
          </div>
        ),
      },
      {
        selector: ".generative-fill-page",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">Generative Fill Page</h2>
            <p className="text-muted-foreground">
              Easily modify and expand images by describing new content for the
              AI to generate and fill.
            </p>
          </div>
        ),
      },
      {
        selector: ".object-remove-page",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">
              Remove Image Object Page
            </h2>
            <p className="text-muted-foreground">
              Seamlessly remove any unwanted elements from your images using our
              intelligent object removal tool.
            </p>
          </div>
        ),
      },
      {
        selector: ".background-remove-page",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">
              Image Background Remove Page
            </h2>
            <p className="text-muted-foreground">
              Quickly and precisely isolate the subject of an image by
              automatically removing its background.
            </p>
          </div>
        ),
      },
      {
        selector: ".profile-page",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">Profile Page</h2>
            <p className="text-muted-foreground">
              This is the page where you can mange your projects and see
              *Credits* and others info
            </p>
          </div>
        ),
      },
      {
        selector: ".buy-credits-page",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">Credits Plans page</h2>
            <p className="text-muted-foreground">
              View and purchase all available Credit Plans here to manage your
              subscription and usage limits. (Testing phrase)
            </p>
          </div>
        ),
      },
      {
        selector: ".manage-account",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">Manage your account</h2>
            <p className="text-muted-foreground">
              Access comprehensive options to manage account settings, security,
              privacy, and personal information.
            </p>
          </div>
        ),
      },
      {
        selector: ".home-project-card",
        content: (
          <div>
            <h2 className="font-semibold text-lg mb-2">Project Card</h2>
            <p className="text-muted-foreground">
              Each card gives a quick visual summary of a project.
            </p>
          </div>
        ),
      },
    ],
  },
];

export function ProductTourButton() {
  const { setIsOpen } = useTour();
  return (
    <Button
      variant="outline"
      size="sm"
      className="lg:block hidden"
      onClick={() => setIsOpen(true)}
    >
      How to use?
    </Button>
  );
}

export const PTBadge = () => null;

export const PTContent = ({ content }) => {
  return (
    <div className="flex flex-col gap-2 pr-4 ">
      <div className="text-sm ">{content}</div>
    </div>
  );
};

const ProductTourProvider = ({ children }) => {
  const { userId } = useAuth();

  const handleClose = async (e) => {
    e.setCurrentStep(0);
    e.setIsOpen(false);

    await tourDone(userId);
  };
  return (
    <TourProvider
      steps={steps[0].dashboard}
      components={{ Badge: PTBadge, Content: PTContent }}
      className="bg-dark-lighter!"
      onClickClose={handleClose}
    >
      {children}
    </TourProvider>
  );
};
export default ProductTourProvider;
