import { BsFillCartFill } from "react-icons/bs";
import { HeaderClient } from "./components/HeaderClient";
import { ProductDetailsCard } from "./components/ProductDetailsCard";
import { DefaultButton } from "./components/DefaultButton";

import computerImg from "./assets/img/image 3.png";

function App() {
  return (
    <>
      <HeaderClient.Root>
        <HeaderClient.Name nome="DsCommerce" />
        <HeaderClient.Buttons icon={BsFillCartFill} name="Entrar" />
      </HeaderClient.Root>

      <ProductDetailsCard.Root>
        <ProductDetailsCard.Image imageUrl={computerImg} />
        <ProductDetailsCard.Price price="R$ 5000,00" />
        <ProductDetailsCard.Name productName="Computador GTX Gaming" />
        <ProductDetailsCard.Text
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eligendi
      sit asperiores voluptatum nam quo incidunt quia impedit natus cum rem
      corrupti eum ad, repellendus aliquam voluptatem velit aliquid ex? consectetur adipisicing elit. Deserunt eligendi
      sit asperiores voluptatum nam quo incidunt quia impedit natus cum rem
      corrupti eum ad, repellendus aliquam voluptatem velit aliquid ex?"
        />
        <ProductDetailsCard.Categories>
          <ProductDetailsCard.Category categoryName="Eletronicos" />
          <ProductDetailsCard.Category categoryName="Brinquedos" />
          <ProductDetailsCard.Category categoryName="Bebidas" />
        </ProductDetailsCard.Categories>
      </ProductDetailsCard.Root>

      <DefaultButton.Root>
        <DefaultButton.Primary name="Comprar" />
        <DefaultButton.Secondary name="Inicio" />
      </DefaultButton.Root>
      
    </>
  );
}

export default App;
