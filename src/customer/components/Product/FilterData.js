export const color = [
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "yellow",
];

export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White'},
        { value: 'beige', label: 'Beige'},
        { value: 'blue', label: 'Blue'},
        { value: 'brown', label: 'Brown'},
        { value: 'green', label: 'Green'},
        { value: 'purple', label: 'Purple'},
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S'},
        { value: 'M', label: 'M'},
        { value: 'L', label: 'L'},
      ],
    },
  ];

export const singleFilter=[
    {
     id:"price",
     name:"Price",
     options:[
        {value:"159-399", label:"159-399"},
        {value:"399-999", label:"399-999"},
        {value:"999-1999", label:"999-1999"},
        {value:"1999-2999", label:"1999-2999"},
        {value:"3999-4999", label:"3999-4999"},
     ]   
    }
];
  