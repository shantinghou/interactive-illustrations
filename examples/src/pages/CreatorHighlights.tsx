import { useEffect, useState } from "react";
import { Upload } from "lucide-react";

type CreatorEntry = {
  "Title of your work": string;
  "Creator Name": string;
  "Link to website / work": string;
  "Image URL": string;
};

export default function CreatorHighlights() {
  const [data, setData] = useState<CreatorEntry[]>([]);

  const handleClick = () => {
    window.open("https://forms.gle/5EEsCH4Yr9dmgXpZ9", "_blank");
  };

  useEffect(() => {
    const fetchSheet = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdQDRPO1A7I-gVrrxS-rHc3w170l4et-PgBDuMiSHHVISZrmWx_WP7YKeX4y45tmqwecx2PDm2j3zZ/pub?gid=1084938059&single=true&output=csv"
      );
      const text = await res.text();

      // Convert CSV to array of objects
      const [_, ...lines] = text.split("\n");

      const rows = lines.map(line => {
        const values = line.split(",");
        const row: CreatorEntry = {
          "Title of your work": values[1]?.trim() || "",
          "Creator Name": values[2]?.trim() || "",
          "Link to website / work": values[3]?.trim() || "",
          "Image URL": values[4]?.trim() || "",
        };
        return row;
      });

      setData(rows);
    };

    fetchSheet();
  }, []);


  return (
    <div className="justify-center w-full font-display p-5 md:p-15 lg:p-20 space-y-5">
      <p className="text-3xl text-center mb-4">Creator Highlights</p>
      <div className="flex justify-center w-full">
        <button
          onClick={handleClick}
          className="flex items-center gap-2 !bg-gray-800 !text-white px-6 py-3 rounded-xl shadow hover:!bg-gray-600 transition cursor-pointer"
        >
          <Upload className="w-5 h-5" />
          Upload Your Creation
        </button>
      </div>

      {data.length === 0 ? (
        <p className="text-lg text-center font-code">None yet...</p>
      ) : (
        <div className="flex flex-wrap space-y-4 font-body">
          {data.map((row, i) => {
            const link = row["Link to website / work"]?.trim();

            return (
              <a
                key={i}
                href={link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-1/3 block bg-gray-100 p-2 rounded-xl shadow hover:shadow-lg transition hover:bg-gray-200"
              >
                {row["Image URL"] && (
                  <img
                    src={row["Image URL"]}
                    alt={row["Title of your work"]}
                    className="w-full h-auto rounded-xl mb-4"
                    referrerPolicy="no-referrer"
                  />
                )}
                <p className="font-bold !text-black">{row["Title of your work"]}</p>
                <p className="!text-black">{row["Creator Name"]}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}