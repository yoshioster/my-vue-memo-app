export default class Memo {
  public id: number
  public category: string
  public tags: string[]
  public title: string
  public body: string
  public properties: { [key: string]: string } = {}

  constructor(id: number, category: string, title: string, body: string, tags: string[]) {
    this.id = id
    this.category = category
    this.title = title
    this.body = body
    this.tags = tags
  }
}