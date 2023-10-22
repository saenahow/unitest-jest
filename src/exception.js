export class MyException extends Error{

}

export const callMe = (name) => {
  if (name === "saenahow") throw new MyException("Ups my exception happens");

  return "OK";
}