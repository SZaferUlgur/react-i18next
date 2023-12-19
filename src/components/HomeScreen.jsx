import React from "react";
import { useTranslation } from "react-i18next";
import { FaEdit, FaTrashAlt } from "react-icons/fa"


const dataTable = [
  {
    id: 1,
    name: "Serhat Zafer Ülgür",
    address: "Ankara-Keçiören",
    coding: "C# dot.Net",
  },
  {
    id: 2,
    name: "Serhat Zafer Ülgür",
    address: "Ankara-Keçiören",
    coding: "React-JS",
  },
  {
    id: 3,
    name: "Serhat Zafer Ülgür",
    address: "Ankara-Keçiören",
    coding: "Node-JS",
  },
  {
    id: 4,
    name: "Serhat Zafer Ülgür",
    address: "Ankara-Keçiören",
    coding: "SQL-TSQL",
  },
];

const HomeScreen = () => {
  const { t } = useTranslation("translation");

  return (
    <div className="container">
      
      <h2>{t("tablo.baslik")}</h2>
      <hr />
      <div className="table-responsive">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>{t("tablo.id")}</th>
              <th>{t("tablo.islem")}</th>
              <th>{t("tablo.adiSoyadi")}</th>
              <th>{t("tablo.adres")}</th>
              <th>{t("tablo.kodKutuphane")}</th>
            </tr>
          </thead>
          {dataTable && dataTable.length > 0 && (
            <tbody>
              {dataTable.map((data) => (
                <tr key={data.id}>
                  <th>{data.id}</th>
                  <th className="d-flex col gap-1 justify-content-center">
                    <button className="btn btn-danger"><FaTrashAlt /> {t("tablo.silButon")}</button>
                    <button className="btn btn-primary"><FaEdit /> {t("tablo.duzenleButon")}</button>
                  </th>
                  <th>{data.name}</th>
                  <th>{data.address}</th>
                  <th>{data.coding}</th>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default HomeScreen;
