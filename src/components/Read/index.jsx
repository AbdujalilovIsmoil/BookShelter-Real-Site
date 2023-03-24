import React from "react";
import "./Read.scss";
import Book from "../../assets/images/png/book.png";

const index = () => {
  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="read">
            <div className="read-header d-flex justify-content-between align-items-center">
              <h4 className="read-header__title">Python</h4>
              <i className="read-header__times fa fa-times"></i>
            </div>
            <div className="read-book d-flex justify-content-center">
              <img
                src={Book}
                alt="book"
                title="book"
                className="read-book__book"
              />
            </div>
            <div className="read-content">
              <p className="read-content__text">
                Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum.
                Incididunt quis mollit elit commodo cillum eiusmod reprehenderit
                labore irure. Cillum et incididunt et nostrud exercitation quis
                aute laboris non ut adipisicing. Laboris ad minim aute nulla
                proident deserunt velit anim sunt aliquip ut sit. Exercitation
                aliquip ullamco officia non aliqua. Sint deserunt aliquip veniam
                id eiusmod sit consectetur mollit ea aliqua officia consequat.
                Magna non mollit nisi est commodo voluptate aute id. Deserunt
                nostrud id do in nisi mollit deserunt non. Pariatur fugiat
                cillum irure elit sint nisi ad ipsum culpa deserunt cupidatat
                esse consequat laboris. Id aliquip non consectetur esse proident
                duis Lorem.
              </p>
            </div>
            <div className="read-about">
              <div className="read-about-box">
                <p className="read-about-box__key">Author:</p>
                <div className="read-about-box-values">
                  <p className="read-about-box-values__value">Jamal Kasper</p>
                  <p className="read-about-box-values__value">Author 2</p>
                </div>
              </div>
              <div className="read-about-box">
                <p className="read-about-box__key">Published: </p>
                <div className="read-about-box-values">
                  <p className="read-about-box-values__value">2019</p>
                </div>
              </div>
              <div className="read-about-box">
                <p className="read-about-box__key">Publishers: </p>
                <div className="read-about-box-values">
                  <p className="read-about-box-values__value">Hollman</p>
                </div>
              </div>
              <div className="read-about-box">
                <p className="read-about-box__key">Categories: </p>
                <div className="read-about-box-values">
                  <p className="read-about-box-values__value">Computers</p>
                </div>
              </div>
              <div className="read-about-box">
                <p className="read-about-box__key">Pages Count: </p>
                <div className="read-about-box-values">
                  <p className="read-about-box-values__value">346</p>
                </div>
              </div>
            </div>
            <div className="read-body d-flex justify-content-end py-4">
              <button className="read-body__btn text-light">Read</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
