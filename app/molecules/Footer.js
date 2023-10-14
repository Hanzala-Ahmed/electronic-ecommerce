import Image from "next/image";
import Link from "next/link";

const footerLinksSection = [
  {
    heading: "Products",
    links: [
      "Home Automation",
      "Home Security",
      "Home Life",
      "Asseccories",
      "Combos",
      "Merchandise",
      "Spring Sale",
    ],
  },
  {
    heading: "Support",
    links: [
      "Help Center",
      "Contact Us",
      "User Manual",
      "Track Your Order",
      "App Status",
      "Where to Buy",
      "FAQs",
    ],
  },
  {
    heading: "About",
    links: [
      "About Us",
      "SwitchBot Points",
      "Shipping",
      "Warranty",
      "Returns/Refunds",
      "Terms of Services",
      "Payment Methods",
      "Privacy Policy",
    ],
  },
  {
    heading: "Get Involved",
    links: [
      "Blog",
      "Press",
      "Community",
      "Winter Announcements",
      "Become a Distributor",
      "Influencer Program",
    ],
  },
];

const socialLinks = [
  {
    title: "facebook",
    icon: "/images/facebook.svg",
  },
  {
    title: "insta",
    icon: "/images/insta.svg",
  },
  {
    title: "twitter",
    icon: "/images/twitter.svg",
  },
  {
    title: "youtube",
    icon: "/images/youtube.svg",
  },
];

export default function Footer({ links = true }) {
  return (
    <div className="w-full flex flex-col gap-2 bg-black text-white">
      {links && (
        <div className="w-full h-full flex flex-wrap md:flex-nowrap py-4 mt-6 px-10 gap-8">
          {footerLinksSection.map((item, ind) => {
            return (
              <div className="w-fit md:w-[24%] flex flex-col gap-5" key={ind}>
                <p className="text-[20px] uppercase font-bold">
                  {item.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {item.links.map((link, linkInd) => {
                    return (
                      <Link href={"#"} className="" key={linkInd}>
                        {link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="w-full h-full flex flex-wrap md:flex-nowrap py-4 mt-6 px-10 gap-10">
        <div className="md:w-[33%] flex flex-col gap-4">
          <p className="text-[24px] font-bold w-[80%]">
            Subscribe Now To Get SwitchBot Tag For Only US$0.99!
          </p>

          <div className="flex relative w-fit h-fit bg-[#D9D9D9]">
            <input
              type="text"
              placeholder="your@email.com"
              className="px-4 bg-transparent text-[#968E8E] placeholder:text-[#968E8E] outline-none border-none w-[80%] h-[50px]"
            />
            <Image
              src="/images/mailIcon.svg"
              alt="logo"
              width={40}
              height={40}
              layout="fixed"
              className="absolute right-2 top-[24%] cursor-pointer"
            />
          </div>
          <p className="w-[67%] font-bold text-[18px]">
            After subscribing, please check your email for special offers.
          </p>
        </div>

        <div className="md:w-[33%] flex flex-col gap-14 items-start md:items-center">
          <p className="font-bold text-[24px]">FOLLOW FOR MORE</p>
          <div className="flex gap-6">
            {socialLinks.map((social, ind) => {
              return (
                <div className="p-1 bg-[#88B8C8]" key={ind}>
                  <Link href={"#"}>
                    <Image
                      src={social.icon}
                      alt="logo"
                      width={34}
                      height={34}
                      layout="fixed"
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:w-[33%] flex flex-col gap-14 items-start md:items-center">
          <p className="font-bold text-[24px]">Download Our App</p>

          <div className="flex gap-3">
            <div className="py-3 px-5 bg-[#272525] flex flex-col gap-4 items-center justify-center">
              <p className="text-[14px]">Download our App</p>
              <Image
                src={"/images/appstore.svg"}
                alt="logo"
                width={30}
                height={30}
                className=""
              />
              <p className="uppercase text-[18px]">APP STORE</p>
            </div>
            <div className="py-3 px-5 bg-[#272525] flex flex-col gap-4 items-center justify-center">
              <p className="text-[14px]">Download our App</p>
              <Image
                src={"/images/playstore.svg"}
                alt="logo"
                width={30}
                height={30}
                className=""
              />
              <p className="uppercase text-[18px]">GOOGLE PLAY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
