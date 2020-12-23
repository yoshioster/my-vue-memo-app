const LOCALSTRAGE_TAGS_KEY = 'tags'

export default class Tags {
  private tags: string[]

  constructor() {
    if (LOCALSTRAGE_TAGS_KEY in localStorage) {
      this.tags = JSON.parse(localStorage.getItem(LOCALSTRAGE_TAGS_KEY) as string)
    } else {
      this.tags = []
      localStorage.setItem(LOCALSTRAGE_TAGS_KEY, JSON.stringify(this.tags))
    }
  }

  getTags(): string[] {
    return this.tags ? this.tags : []
  }

  addTag(tag: string) {
    if (!this.tags.includes(tag)) {
      this.tags.push(tag)
      localStorage.setItem(LOCALSTRAGE_TAGS_KEY, JSON.stringify(this.tags))
    }
  }
}