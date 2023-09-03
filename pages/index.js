import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function HomePage({ products }) {
  return (
    <ul>
      {products.map((el) => (
        <Link href={`/${el.id}`} key={el.id}>
          {el.title}
        </Link>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const producs = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json")
  );
  return {
    props: {
      products: JSON.parse(producs).products,
    },
    revalidate: 10,
  };
}

export default HomePage;
