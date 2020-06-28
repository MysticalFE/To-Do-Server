import { selectData, insertData, updateData, deleteData } from "../../db";
import { ListItem, deleteItem } from "../../typings";

export default class toDoService {
  static async select() {
    return await selectData("list");
  }
  static async insert(params: ListItem) {
    return await insertData("list", params);
  }
  static async update(params: ListItem) {
    return await updateData("list", params);
  }
  static async deleteToDo(params: deleteItem) {
    return await deleteData("list", params);
  }
}
