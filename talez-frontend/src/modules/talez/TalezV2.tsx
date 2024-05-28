import styles from "@/assets/css/talez.module.css";
import CreateTalesModal from "./components/CreateTalesModal";
import { Settings } from "lucide-react";
import { useGetTales } from "./hooks/useGetTales";
import { useParams } from "react-router-dom";
import { useState } from "react";
import TalezCard from "./components/TalezCard";
import { talesResponseProps } from "./types";

const TalezV2 = () => {
  const params = useParams();
  const workflowId = params.workflowId || "";
  const [offset] = useState<number>(0);
  const { data: talesData } = useGetTales({ workflowId, offset });

  return (
    <>
      <section className="absolute flex justify-between items-center px-2 py-4 w-full md:p-8">
        <p className="text-2xl maxMd:hidden">Talez</p>
        <div className="flex items-center gap-4 z-10 maxMd:justify-between maxMd:w-full">
          <CreateTalesModal />
          <button>
            <Settings />
          </button>
        </div>
      </section>
      <div className={styles.talez_main_container}>
        <div className={styles.talez_view_container}>
          {talesData?.tales?.map((tale: talesResponseProps) => (
            <TalezCard tale={tale} key={tale?._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TalezV2;
