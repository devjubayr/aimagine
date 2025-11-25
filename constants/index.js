import EmailIcon from "@/components/ui/EmailIcon";
import GithubIcon from "@/components/ui/GithubIcon";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import XIcon from "@/components/ui/XIcon";
import { IconRestore, IconTagFilled } from "@tabler/icons-react";
import {
  Expand,
  ImageIcon,
  LocateIcon,
  PhoneCall,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const DB_NAME = "aimagine";

export const navLinks = [
  {
    label: "Home",
    route: "/dashboard",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Image Restore",
    route: "/dashboard/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Generative Fill",
    route: "/dashboard/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Object Remove",
    route: "/dashboard/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  // {
  //   label: "Object Recolor",
  //   route: "/dashboard/transformations/add/recolor",
  //   icon: "/assets/icons/filter.svg",
  // },
  {
    label: "Background Remove",
    route: "/dashboard/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Profile",
    route: "/dashboard/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Buy Credits",
    route: "/dashboard/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 5,
    inclusions: [
      {
        label: "5 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 5,
    credits: 1,
    inclusions: [
      {
        label: "50 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 50,
    credits: 200,
    inclusions: [
      {
        label: "300 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;

export const rooNavLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Pricing",
    route: "/plans",
  },
  {
    label: "About Us",
    route: "/about",
  },
  {
    label: "Contact Us",
    route: "/contact",
  },
];

export const features = [
  {
    id: 1,
    icon: <IconRestore className="group-hover:text-black" />,
    title: "AI Image Restoration",
    description:
      "Revive old blurry photos. Enhance resolution quality. Fix pixelation issues perfectly.",
    tags: ["Enhance", "Upscale", "Repair"],
    detailsLink: "/dashboard/transformations/add/restore",
  },
  {
    id: 2,
    icon: <Expand className="group-hover:text-black" />,
    title: "Generative Fill & Expand",
    description:
      "Expand image borders smartly. Fill missing areas seamlessly. AI content generation.",
    tags: ["Expand", "Fill", "Creative"],
    detailsLink: "/dashboard/transformations/add/fill",
  },
  {
    id: 3,
    icon: <IconTagFilled className="group-hover:text-black" />,
    title: "Smart Object Removal",
    description:
      "Remove unwanted objects easily. Erase people perfectly. Reconstruct background naturally.",
    tags: ["Clean", "Remove", "Edit"],
    detailsLink: "/dashboard/transformations/add/remove",
  },
  {
    id: 4,
    icon: <ImageIcon className="group-hover:text-black" />,
    title: "Background Removal",
    description:
      "Perfect cutouts instantly. Preserve fine details. Maintain image quality always.",
    tags: ["Cutout", "Background", "Isolate"],
    detailsLink: "/dashboard/transformations/add/removeBackground",
  },
];

export const aboutFeatured = [
  {
    icon: Target,
    title: "Relentless Innovation",
    description:
      "We constantly challenge the status quo, integrating cutting-edge technology to keep our users ahead of the curve.",
    linkText: "Learn about our tech →",
    linkUrl: "#",
  },
  {
    icon: Users,
    title: "Community & Trust",
    description:
      "Open communication and data security are paramount. We build features with our users, not just for them.",
    linkText: "Read our charter →",
    linkUrl: "#",
  },
  {
    icon: TrendingUp,
    title: "Impact & Growth",
    description:
      "Our goal is to maximize the success of every user. We measure our success only by the impact we create.",
    linkText: "See our impact report →",
    linkUrl: "#",
  },
];

export const contactCards = [
  {
    id: 1,
    icon: <EmailIcon />,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    other: "devjubayr@gmail.com",
    link: "mailto:devjubayr@gamil.com",
  },
  {
    id: 2,
    icon: <PhoneCall />,
    title: "Call Us",
    description: "Sun-Fri from 7am to 1pm",
    other: "+880 1875329737",
    link: "https://wa.me/8801875329737",
  },
  {
    id: 3,
    icon: <LocateIcon />,
    title: "Location",
    description: "Come say hello",
    other: "Jaintapur 3100,  Sylhet, Bangladesh",
    link: "https://maps.google.com/?q=jaintapur,sylhet,bangladesh",
  },
];

export const contactSocialLinks = [
  {
    id: 1,
    icon: XIcon,
    route: "https://x.com/devjubayr",
  },
  {
    id: 2,
    icon: LinkedInIcon,
    route: "https://www.linkedin.com/in/devjubayr",
  },
  {
    id: 3,
    icon: GithubIcon,
    route: "https://github.com/devjubayr",
  },
];
