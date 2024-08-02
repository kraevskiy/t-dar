import Layout from "@/components/layout";
import "./style.scss";
import SectionPayment from "@/components/app/components/section-payment.tsx";
import SectionPromo from "@/components/app/components/section-promo.tsx";
import SectionTransaction from "@/components/app/components/section-transaction.tsx";

const App = () => {

  return (
    <Layout>
      <section className="container">
        <h1 className="ff-bold text-s-24 capitalize page-title">Make a Deposit</h1>
        <SectionPayment />
        <SectionPromo />
        <SectionTransaction />
      </section>
    </Layout>
  );
};

export default App;
