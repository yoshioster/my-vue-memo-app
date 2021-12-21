import Memo from "./Memo"

const LOCALSTRAGE_KEY = 'memos'

export default class Memos {

  private list: Memo[]

  private nextId = 1

  constructor() {
    let list: Memo[]
    if (LOCALSTRAGE_KEY in localStorage) {
      list = JSON.parse(localStorage.getItem(LOCALSTRAGE_KEY) as string)
      const memoList: Memo[] = []
      list.forEach((memo: Memo) => {
        this.nextId = (this.nextId > memo.id) ? this.nextId : memo.id + 1
        const m = new Memo(memo.id, memo.category, memo.title, memo.body, memo.tags)
        m.properties = memo.properties
        memoList.push(m)
      })
      this.list = memoList
    } else {
      this.list = []
    }
  }

  public getList(category: string) {
    return this.list.filter(memo => memo.category === category)
  }

  public getMemo(id: number) {
    const memo = this.list.find(memo => memo.id === id)
    return memo ? memo : this.getNewMemo()
  }

  public getNewMemo() {
    return new Memo(this.nextId++, '', '', '', [])
  }

  public addMemo(memo: Memo) {
    if (this.list.findIndex(e => e.id === memo.id) === -1) {
      this.list.push(memo)
    }
    localStorage.setItem(LOCALSTRAGE_KEY, JSON.stringify(this.list))
  }
}