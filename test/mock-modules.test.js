import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/products.service";

jest.mock("../src/database.js");
const mockResult = {
  id: 1,
  name: "Product mock"
}
const mockProducts = [
  { ...mockResult },
  {
    id: 2,
    name: "product mock 2"
  }
]
test("mock modules getProductById", () => {
  getProductById.mockImplementation(id => {
    return mockResult
  });

  const product = ProductService.findById(1);
  expect(product).toEqual(mockResult)
})

test("mock modules getAllProducts", () => {
  getAllProducts.mockImplementation(() => {
    return mockProducts
  })

  expect(ProductService.findAll()).toEqual(mockProducts);
});