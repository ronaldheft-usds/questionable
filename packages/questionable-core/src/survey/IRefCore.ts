/** Generic reference object */
export interface IRefCore {
  /**
   * Unique identifier
   *
   * @title Id
   */
  id: string;
  /**
   * Optional order
   *
   * @title Order
   * @hidden
   */
  order?: number;
  /**
   * @title SubTitle
   */
  subTitle?: string;
  /**
   * @title Title
   */
  title?: string;
  /**
   * @title Type
   * @hidden
   */
  type?: string;
}
