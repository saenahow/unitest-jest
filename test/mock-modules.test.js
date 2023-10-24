import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/products.service";

jest.mock("../src/database.js");
const mockProducts = [
  {
    id: 1,
    name: "Product mock"
  },
  {
    id: 2,
    name: "product mock 2"
  }
]
test("mock modules getProductById", () => {
  getProductById.mockImplementation(id => {
    return {
      id,
      name: "product mock"
    }
  });

  const product = ProductService.findById(1);
  expect(product).toEqual({
    id: 1,
    name: "product mock"
  })
})

test("mock modules getAllProducts", () => {
  getAllProducts.mockImplementation(() => {
    return mockProducts
  })

  expect(ProductService.findAll()).toEqual(mockProducts);
});