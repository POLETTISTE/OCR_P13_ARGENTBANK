import { Fragment } from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const Account = () => {
  const editedNameStore = useSelector((state) => state.login.editedName);

  return (
    <Fragment>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button
            className={
              editedNameStore
                ? "transaction-button transaction-button-edit"
                : "transaction-button"
            }>
            View transactions
          </button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button
            className={
              editedNameStore
                ? "transaction-button transaction-button-edit"
                : "transaction-button"
            }>
            View transactions
          </button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button
            className={
              editedNameStore
                ? " transaction-button transaction-button-edit"
                : "transaction-button"
            }>
            View transactions
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Account;
