import React, { useEffect, useState } from "react";
import {FcGlobe} from "react-icons/fc"
import { useTranslation } from "react-i18next";
import Logo from "../files/toucanicon.png"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const dillerTablo = [
  { name: "Türkçe", code: "tr" },
  { name: "English", code: "en" },
  { name: "Deutsch", code: "de" },
];
 
const user = [{ userName: "admin@gmail.com", lang: "tr" }];

const Header = () => {
  const navigate = useNavigate()
  const [dropDown, setDropDown] = useState("");
  let browserLang = window.navigator.language;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (user.lang && user.lang !== browserLang) {
      i18n.changeLanguage(user.lang);
    } else {
      i18n.changeLanguage(browserLang);
    }
  }, [browserLang, i18n]);

  const dilChange = (dil) => {
    setDropDown("");
    i18n.changeLanguage(dil.code);
    toast.success(dil.name)
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <img
        alt={Logo}
        src={Logo}
        height="40"
        className="mr-2 cursor-pointer"
        style={{ marginLeft: "20px", marginRight: "20px" }}
        onClick={() => navigate("/")}
      />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNavDropdown"
        style={{ justifyContent: "space-between" }}
      >
        <ul className="navbar-nav nav-margin"></ul>
        <div className="flex-row" style={{ gap: "10px", marginRight: "20px"}}>
          <div className="d-flex col gap-2">
            <div className="flex justify-content-center mt-1">
              <div className="dropdown">
                <FcGlobe style={{ fontSize: "30px"}}
                  className="cursor-pointer mt-1 dropdown-toggle dunya-logo"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => setDropDown("show")}
                  onMouseMove={() => setDropDown("show")}
                />
                <div
                  className={`dropdown-menu ${dropDown}`}
                  aria-labelledby="dropdownMenuButton"
                  aria-expanded="true"
                  onMouseLeave={() => setDropDown("")}
                >
                  {dillerTablo.map((dil, index) => (
                    <span
                      key={index}
                      className="dropdown-item cursor-pointer"
                      onClick={() => dilChange(dil)}
                    >
                      {dil.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="btn btn-success mt-1">{t("main.userButon")}</button>
            <button className="btn btn-primary mt-1">{t("main.profilButon")}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
