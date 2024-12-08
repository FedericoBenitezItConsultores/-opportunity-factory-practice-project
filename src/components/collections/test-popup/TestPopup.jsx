import React, { useState } from "react";
import ContinueWithQuoteReportBug from "../popup/cards-pop-up/ContinueWithQuoteReportBug";
import ContinueWithQuoteTryLater from "../popup/cards-pop-up/ContinueWithQuoteTryLater";
import ContinueWithQuoteTryLaterDriverDiscount from "../popup/cards-pop-up/ContinueWithQuoteTryLaterDriverDiscount";
import WeCanGenerateReportBug from "../popup/cards-pop-up/WeCanGenerateReportBug";
import styles from "./styles.module.css";

export default function TestPopup({}) {
  const [stateContinueWithQuoteReportBug, setContinueWithQuoteReportBug] =
    useState(false);
  const [stateContinueWithQuoteTryLater, setContinueWithQuoteTryLater] =
    useState(false);
  const [
    stateContinueWithQuoteTryLaterDriverDiscount,
    setContinueWithQuoteTryLaterDriverDiscount,
  ] = useState(false);
  const [stateWeCanGenerateReportBug, setWeCanGenerateReportBug] =
    useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <>
      {stateContinueWithQuoteReportBug && (
        <ContinueWithQuoteReportBug
          btn_myBusinesses={() => setContinueWithQuoteReportBug(false)}
        />
      )}
      {stateContinueWithQuoteTryLater && (
        <ContinueWithQuoteTryLater
          btn_misNegocios={() => setContinueWithQuoteTryLater(false)}
          btn_reintentar={() => setContinueWithQuoteTryLater(false)}
        />
      )}
      {stateContinueWithQuoteTryLaterDriverDiscount && (
        <ContinueWithQuoteTryLaterDriverDiscount
          btn_misNegocios={() =>
            setContinueWithQuoteTryLaterDriverDiscount(false)
          }
          btn_reintentar={() =>
            setContinueWithQuoteTryLaterDriverDiscount(false)
          }
        />
      )}
      {stateWeCanGenerateReportBug && (
        <WeCanGenerateReportBug
          btn_misNegocios={() => setWeCanGenerateReportBug(false)}
        />
      )}
      <div className={styles.containerBtns}>
        <div className={styles.containerBtns2}>
          <button
            className={
              isMenuOpen
                ? styles.containerBtnsClosed
                : styles.containerBtnsClosed
            }
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "<" : ">"}
          </button>
          {!isMenuOpen && (
            <div className={styles.containerBtns3}>
              <button
                onClick={() =>
                  setContinueWithQuoteReportBug(
                    !stateContinueWithQuoteReportBug
                  )
                }
                title="stateContinueWithQuoteReportBug"
              >
                pop-up 1
              </button>
              <button
                onClick={() =>
                  setContinueWithQuoteTryLater(!stateContinueWithQuoteTryLater)
                }
                title="stateContinueWithQuoteTryLater"
              >
                pop-up 2
              </button>
              <button
                onClick={() =>
                  setContinueWithQuoteTryLaterDriverDiscount(
                    !stateContinueWithQuoteTryLaterDriverDiscount
                  )
                }
                title="stateContinueWithQuoteTryLaterDriverDiscount"
              >
                pop-up 3
              </button>
              <button
                onClick={() =>
                  setWeCanGenerateReportBug(!stateWeCanGenerateReportBug)
                }
                title="stateWeCanGenerateReportBug"
              >
                pop-up 4
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
