import Button from "@/components/button";
import Icon from "@/components/icon";
import List from "@/components/list";
import { transactions } from "@/data/transactions.ts";

const SectionTransaction = () => {

  return (
    <section className="section-transaction">
      <div className="section-transaction__header">
        <h2 className="ff-bold"><span>Last</span> Transactions</h2>
        <Button className="bg-dark-light" variant="icon">
          <Icon name="filter" />
        </Button>
      </div>
      <List className="section-transaction__list">
        {transactions.map(transaction => <List.Row data={transaction} key={transaction.number + transaction.status} />)}
      </List>
      <Button appearance="error" className="section-transaction__button">
        Show More
      </Button>
    </section>
  );
};

export default SectionTransaction;
