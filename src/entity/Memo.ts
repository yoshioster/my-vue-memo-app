export default class Memo {
  public id: number
  public tags: string[]
  public title: string
  public body: string

  constructor(id: number, title: string, body: string, tags: string[]) {
    this.id = id
    this.title = title
    this.body = body
    this.tags = tags
  }
}