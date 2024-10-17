import React from "react";
import Papa from "papaparse";
import { Loader } from "../../components/Loader/Loader";
const CSVButton = ({ data, fileName, isLoading, setLoading, buttonText }) => {
    const handleDownloadCSV = () => {
        if (!data || data.length === 0) {
            alert("Aucune donnée à exporter.");
            return;
        }

        setLoading(true);

        const csv = Papa.unparse(data);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${fileName}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setLoading(false);
    };

    return (
        <div className="download">
            <p className="support">{buttonText}</p>
            <button  className="CSV-Button" onClick={handleDownloadCSV} disabled={isLoading}>
                {isLoading ? <Loader /> : "Télécharger"}
            </button>
        </div>
    );
};

export default CSVButton;
