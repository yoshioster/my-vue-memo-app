export interface CategorySchema {
  name: string;
  schema: {
    id: string;
    type: string;
    property: string;
  }[];
}

export const categorySchema: CategorySchema[] = [
  {
    name: 'ウィスキー',
    schema: [
      { id: 'title', type: 'text', property: 'title' },
      { id: 'body', type: 'textarea', property: 'body' },
    ]
  },
  {
    name: '脱出ゲーム',
    schema: [
      { id: 'title', type: 'text', property: 'title' },
      { id: 'shop', type: 'text', property: 'shop' },
      { id: 'body', type: 'textarea', property: 'body' },
    ]
  },
]

export const categoryList: string[] = [
  'ウィスキー',
  '脱出ゲーム',
]