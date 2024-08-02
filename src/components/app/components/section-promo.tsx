import Input from "@/components/input";
import Icon from "@/components/icon";
import Button from "@/components/button";

const SectionPromo = () => {

  return (
    <section className="section-promo">
      <h2 className="ff-bold text-s-18 page-subtitle">Have a Promo Code?</h2>
      <p className="section-promo__text">Enter promo code here. It will activate a special bonus!</p>
      <Input
        icon={<Icon name="check" />}
        onChange={() => {
        }}
        className="section-promo__input"
      />
      <Button appearance="error" className="section-promo__button">
        Apply
      </Button>
    </section>
  );
};

export default SectionPromo;
