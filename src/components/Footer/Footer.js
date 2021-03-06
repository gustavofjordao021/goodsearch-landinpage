const Footer = () => {
  return (
    <>
      <footer className="shadow-md flex flex-row w-full text-xs px-4 py-4 mx-4 text-center bg-gray-50 justify-between md:px-14 xl:w-3/4">
        <div className="mb-1">© 2021 GoodProtocol</div>
        <div className="justify-center text-center">
          <b>
            Made with{" "}
            <span role="img" aria-label="love">
              💚 &nbsp;
            </span>
          </b>
          in Miami
        </div>
      </footer>
    </>
  );
};

export default Footer;
