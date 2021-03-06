interface uniteObject {
  [key: string]: any;
  children?: uniteObject[];
}

interface arrToTreeDataType {
  id: number;
  parentId: number;
}
interface objectType {
  [key: string]: string;
}

export default class RecursionHalle {
  /** 获取树结构数据某一个键值 */
  convertData(testData: uniteObject[], selEle: string): string[];

  /** 将一维数组转化为树结构类型数据 */
  arrToTreeData(arrToTreeDataType): uniteObject;

  /** 获得树结构类型数据的路径 */
  nodePath(
    originData: uniteObject[],
    keyName: string,
    customSymbol: string
  ): string[];

  /** 获取节点的子节点 */
  getChildNode(
    originData: uniteObject[],
    keyName: string,
    nodeName: string
  ): objectType;

  /** 为每个节点插入属性 */
  insertAttr(originData: uniteObject[], insertObj: objectType): uniteObject;

  /** 为节点替换键名 */
  replaceKeyName(
    originData: uniteObject[],
    replaceObj: objectType
  ): uniteObject[];

  /** 获得节点的个数 */
  getnodeCount(testData: uniteObject[]): number;

  /** 一维化数据 */
  downGradeData(
    originData: uniteObject[],
    idValue: string,
  ): any[];

  /** 去重并去除undefined */
  delUndefined(inCome: string[]): string[];

  /** 对象替换键名 */
  renameKeys(keysMap: objectType, obj: objectType): objectType;
}

export declare namespace treeRecursionHalle {
  /** 获取树结构数据某一个键值 */
  function convertData(testData: uniteObject[], selEle: string): string[];

  /** 将一维数组转化为树结构类型数据 */
  function arrToTreeData(arrToTreeDataType): uniteObject;

  /** 获得树结构类型数据的路径 */
  function nodePath(
    originData: uniteObject[],
    keyName: string,
    customSymbol: string
  ): string[];

  /** 获取节点的子节点 */
  function getChildNode(
    originData: uniteObject[],
    keyName: string,
    nodeName: string
  ): objectType;

  /** 为每个节点插入属性 */
  function insertAttr(
    originData: uniteObject[],
    insertObj: objectType
  ): uniteObject;

  /** 为节点替换键名 */
  function replaceKeyName(
    originData: uniteObject[],
    replaceObj: objectType
  ): uniteObject[];

  /** 获得节点的个数 */
  function getnodeCount(testData: uniteObject[]): number;

  /** 一维化数据 */
  function downGradeData(
    originData: uniteObject[],
    idValue: string,
  ): any[];

  /** 去重并去除undefined */
  function delUndefined(inCome: any[]): string[];

  /** 对象替换键名 */
  function renameKeys(keysMap: objectType, obj: objectType): objectType;
}
