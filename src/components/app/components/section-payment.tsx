import Grid from "@/components/grid";
import { cards } from "@/data/cards.ts";
import PayCard from "@/components/pay-card";
import { crypto } from "@/data/crypto.ts";
import { useModal } from "@/hooks/use-modal.ts";

const SectionPayment = () => {
  const { onOpen } = useModal();

  return (
    <section className="section-payment">
      <h2 className="ff-bold text-s-18 capitalize page-subtitle">Choose payment method </h2>
      <h3 className="text-s-16">Cards, E-Money, PIN</h3>
      <Grid>
        {cards.map(card =>
          <Grid.Item key={card.name}>
            <PayCard data={card} onClick={() => onOpen("form")} />
          </Grid.Item>,
        )}
      </Grid>
      <h3 className="text-s-16">Cryptocurrency</h3>
      <Grid>
        {crypto.map(card =>
          <Grid.Item key={card.name}>
            <PayCard data={card} onClick={() => onOpen("form")} />
          </Grid.Item>,
        )}
      </Grid>
    </section>
  );
};

export default SectionPayment;
