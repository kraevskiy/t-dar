import cn from "classnames";
import { useState } from "react";

import "./styles.scss";
import { useModal } from "@/hooks/use-modal.ts";
import Icon from "@/components/icon";
import Button from "@/components/button";
import Select from "@/components/select";
import Input from "@/components/input";

const FormModal = () => {
  const { isOpen, type, onClose } = useModal();
  const [isFade, setIsFade] = useState(false);
  const open = isOpen && type === "form";

  const endAnimation = () => {
    onClose();
    setIsFade(false);
  };

  return (
    <div className={cn("modal", {
      "--isOpen": open,
    })}>
      <div className={cn("modal-overlay", {
        "--active": open,
        "fade-out-overlay": isFade,
      })} onClick={() => setIsFade(true)} />
      <div className={cn("modal-body", {
        "fade-out-body": isFade,
      })} onAnimationEnd={endAnimation}>
        <div className="modal-form">

          <div className="modal-form__header">
            <div className="modal-form__header-back">
              <Button variant="icon" onClick={() => setIsFade(true)}>
                <Icon name="arrow-left" />
              </Button>
              <div className="text-s-16 modal-form__header-text">Back to Payment Methods</div>
            </div>
            <Button variant="icon" onClick={() => setIsFade(true)}>
              <Icon name="close" />
            </Button>
          </div>
          <div className="modal-form__body">
            <div className="modal-form__action">
              <Button>
                <span className="modal-form__action-text">Current Balance:</span>
                <span className="modal-form__action-balance">$ 0.00</span>
              </Button>
            </div>
            <div className="modal-form__select">
              <Select />
            </div>
            <div className="modal-form__amount">
              <div className="modal-form__amount-title">Amount</div>
              <div className="modal-form__amount-list">
                <div className="modal-form__amount-list-item">
                  $ 21
                </div>
                <div className="modal-form__amount-list-item">
                  $ 10
                </div>
                <div className="modal-form__amount-list-item">
                  $ 20
                </div>
                <div className="modal-form__amount-list-item">
                  $ 30
                </div>
                <div className="modal-form__amount-list-item">
                  $ 50
                </div>
                <div className="modal-form__amount-list-item">
                  $ 100
                </div>
              </div>
              <div className="modal-form__amount-text">
                From 21.00 to 906.00 USD at a time
              </div>
            </div>
            <div className="modal-form__promo">
              <div className="modal-form__promo-title">
                Promo Code
              </div>
              <div className="modal-form__promo-section">
                <Input
                  icon={<Icon name="check" />}
                  onChange={() => {
                  }}
                  className="modal-form__promo-input"
                />
                <Button className="modal-form__promo-button" appearance="error">
                  Apply
                </Button>
              </div>
            </div>
            <div className="modal-form__submit">
              <Button appearance="error">
                Deposit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
