"use client";
import Footer from "../molecules/Footer";
import Header2 from "../molecules/header2";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export default function Contact() {
  const mapStyles = {
    width: "80px !important",
    height: "50%",
    position: "sticky !important",
  };
  return (
    <>
      <Header2 login={true} />
      <div className="w-full h-fit px-4 md:px-12 my-2 flex flex-col gap-1 mt-14 mb-8">
        <p className="text-[30px] text-[#D0021B] font-bold">Contact Us</p>
        <p className="mt-8 font-bold">For the Product FAQ :</p>
        <p className="">
          Visit <span className="text-[#D0021B]">SwitchBot Help Center</span>
        </p>

        <p className="my-8 font-bold text-[20px]">Order Related Support:</p>

        <p className="my-2">
          Website Support: Press "Support" on the bottom left corner.
        </p>
        <p className="my-2">
          Facebook Messenger:{" "}
          <span className="text-[#D0021B]">m.me/SwitchBotRobot</span>
        </p>
        <p className="my-2">
          Email us:{" "}
          <span className="text-[#D0021B]">support@wondertechlabs.com</span>
        </p>
        <p className="my-2">
          Call us: <span className="text-[#D0021B]"></span>
        </p>
        <p className="my-2">
          United States:
          <span className="text-[#D0021B]">+1 (888) 311-7444</span>
        </p>
        <p className="my-2">
          United Kingdom:
          <span className="text-[#D0021B]">+44 808 164 8959</span>
        </p>
        <p className="my-2">
          Canada:
          <span className="text-[#D0021B]">+1 (888) 831-1585</span>
        </p>

        <p className="my-4 font-bold text-[20px]">Order Related Support:</p>
        <p className="">
          Please kindly submit the issue from the "Feedback" in the SwitchBot
          App
        </p>

        <p className="my-8">---</p>

        <p className="my-4 font-bold text-[20px]">US Business Address:</p>
        <p className="my-2">2035 Sunset Lake Road, Suite B2</p>
        <p className="my-2">19702, Newark, Delaware</p>

        <p className="my-4 font-bold text-[20px]">US Business Address:</p>
        <p className="">
          Room 1102, Qiancheng Commercial Center, No. 5 Haicheng Road, Mabu
          Community, Xixiang Sub-district, Bao'an District, Guangdong, P.R.China
        </p>

        <p className="my-4 font-bold text-[20px]">US Business Address:</p>
        <p className="my-3">WONDERLABS LIMITED Address：</p>
        <p className="my-3">
          OFFICE UNIT NO3 ON THE 13THFLOOR OF GRANDCITY PLAZA NOs.1-17SAILAUKOK
          ROAD,TSUEN WAN,NEW TERITORIES,HONG KONG
        </p>

        <div className="w-full h-[400px]">
          <Map
            google={window.google}
            zoom={17}
            style={mapStyles}
            initialCenter={{
              lat: 19.020145856138136,
              lng: -98.24006775697993,
            }}
          ></Map>
        </div>
      </div>
      <Footer />
    </>
  );
}

// export default GoogleApiWrapper({
//     apiKey: "YOUR API KEY"
// })(MapGoogle);
