import product from "../components/layout/Product";

const homePage = () => {
  
  return (
    <>
      <div className="banner">
        <div className="container_home my-6">
          <img src="/banner.png" />
        </div>
      </div>

      <section>
        <div className="container_home">
          <h1>SẢN PHẨM NỔI BẬT NHẤT</h1>
          <div className="grid grid-cols-7 gap-x-5 gap-y-[100px] my-6">
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
            {product()}
          </div>
        </div>
      </section>
    </>
  );
};

export default homePage;
