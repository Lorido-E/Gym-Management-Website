import React from "react";
import { SelectedPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <>
      <AnchorLink
        className="rounded-md bg-secondary-500 px-10 py-2  hover:bg-primary-500 hover:text-white"
        //Kapag na-click, state ay magiging ContactUs
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        //Smooth scroll papunta sa section na may id="contactus"
        href={`#${SelectedPage.ContactUs}`}
      >
        {children}
      </AnchorLink>
    </>
  );
};

export default ActionButton;
