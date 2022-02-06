/* Feel free to delete the below and add
 * your own code.
 * A functional and classical module import
 * example are provided.
 * */
import { functionExample } from "./modules/function-example.js";
import { ClassExample } from "./modules/class-example.js";

const title = document.querySelector("h1");

if (title) {
  functionExample(title);
  new ClassExample(title);
}