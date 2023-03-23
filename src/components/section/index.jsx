import React from "react";
import "./section.scss";
import { useSelector } from "react-redux";
import Card from "../../UI/Card";

const index = () => {
  const { data, loader } = useSelector((state) => state);

  return (
    <>
      <section className="cards mt-5">
        <div className="container">
          <div className="row">
            {loader ? (
              <h1 className="text-center mt-5">Loader...</h1>
            ) : data.items.length ? (
              data.items.map((el) => <Card key={el.id} {...el} />)
            ) : (
              <h1>NOT FOUND</h1>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
