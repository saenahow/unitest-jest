import { getAllProducts } from "../src/database";
import { ProductService } from "../src/products.service";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");
  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
  }
});
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
test.failing("mock modules getProductById", () => {
  ProductService.findById(1);
})

test("mock modules getAllProducts", () => {
  getAllProducts.mockImplementation(() => {
    return mockProducts
  })

  expect(ProductService.findAll()).toEqual(mockProducts);
});