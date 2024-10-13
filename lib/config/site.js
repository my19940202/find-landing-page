import { TfiYoutube } from "react-icons/tfi";
import { FaRedditAlien, FaTiktok, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaSquareThreads, FaWeixin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiWechatChannelsLine } from "react-icons/ri";

const baseSiteConfig = {
    name: "iFinder a chrome extension for keywords highlighting",
    description:
        "Finding information online taking too much time and effort? Try iFinder, the browser highlighting extension! It automatically highlights the keywords you're looking for, helping you find information faster.",
    url: "https://find-landing-page-eosin.vercel.app",
    ogImage: "https://find-landing-page-eosin.vercel.app/logo.png",
    metadataBase: "/",
    keywords: [
        "chrome extension",
        "automatically highlighting",
        "keyword locate",
        "multiple highlighting",
        "keywords highlighting",
    ],
    authors: [
        {
            name: "xishengbo",
            url: "https://www.ifinder.one/",
        },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
};

export const SiteConfig = {
    ...baseSiteConfig,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: baseSiteConfig.url,
        title: baseSiteConfig.name,
        description: baseSiteConfig.description,
        siteName: baseSiteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: baseSiteConfig.name,
        description: baseSiteConfig.description,
        images: [`${baseSiteConfig.url}/preview.jpg`],
        creator: baseSiteConfig.creator,
    },
};
