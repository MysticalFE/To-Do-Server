import { selectData, insertData } from "../../db";
import { ListItem } from "../../typings";

export default class toDoService {
  static async select() {
    return await selectData("list");
  }
  static async insert(params: ListItem) {
    return await insertData("list", params);
  }
}
