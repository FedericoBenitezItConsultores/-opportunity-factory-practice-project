import { CotizacionPdf } from "../price-pdf/PricePdf";
import { FooterDiligenciación } from "../footer-delecation/FooterDelecation";
import styles from "./style.module.css";
import FooterButtons from "./FooterButtons";
export const Footer = ({
  type,
  functionContinuar,
  functionVolver,
  functionGuardar,
}) => {
  return (
    <>
      <footer>
        <div className={styles.cotizacion}>
          <CotizacionPdf />
        </div>
        <div>
          <div className={styles.container}>
            <FooterDiligenciación />
          </div>
          <FooterButtons
            type={type}
            functionContinuar={functionContinuar}
            functionVolver={functionVolver}
            functionGuardar={functionGuardar}
          />
        </div>
      </footer>
    </>
  );
};
