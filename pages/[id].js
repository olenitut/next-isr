import fs from "fs/promises";
import path from "path";

const ProductDetail = ({ loadedProd }) => {
  return <div>{loadedProd.title}</div>;
};

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.id;

  const producs = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json")
  );

  const product = JSON.parse(producs).products.find((el) => el.id === id);

  return {
    props: {
      loadedProd: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "p1" } },
      { params: { id: "p2" } },
      { params: { id: "p3" } },
    ],
    fallback: false,
  };
}

export default ProductDetail;
