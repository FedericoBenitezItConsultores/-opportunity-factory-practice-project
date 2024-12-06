import FooterButtons from "../../components/collections/footer-buttons/FooterButtons";
import GenerateInPdf from "./basic/generate-inf-pdf/GenerateInPdf";
import PanelPlans from "./collection/panel-plans/PanelPlans";
import styles from "./styles.module.css";
export default function QuotationPage() {
  return (
    <div>
      <PanelPlans />
      <GenerateInPdf />
      <div className={styles.container_footer_btns}>
        <FooterButtons />
      </div>
    </div>
  );
}
