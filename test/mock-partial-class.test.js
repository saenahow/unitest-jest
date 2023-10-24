import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock partial calss findById", () => {
  const user = {
    id: 1,
    name: "Fikri"
  };

  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);
  
  expect(service.findById(1)).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
  expect(repository.findById).toHaveBeenCalled
})