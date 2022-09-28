var MockData = {
  fetchNotebookList() {
    return notebookList;
  },
  addNote(note) {
    notesRepo.push(note);
  },
  fetchNoteObject(noteId) {
    return notesRepo.filter((notes) => notes.id == noteId);
  },
};
export default MockData;

const notebookList = [
  {
    id: 'cacbbd00-b7d5-11ea-b3de-0242ac130004',
    label: 'Sun Java',

    icon: 'bx bx-book-bookmark',
    pin: 'Y',
    notes: [
      {
        id: 'cacbbd00-b7d5-11ea-b3de-0242ac130004-1',
        label: 'Hello World',
        pin: 'Y',
      },
      {
        id: 'cfbbf514-b7d5-11ea-b3de-0242ac130004-1',
        label: 'Java OOPS concepts',
        isDeleted: 'Y',
      },
    ],
    author: { id: 'jalpenshah', name: 'Jalpen Shah' },
    createdAt: '',
    lastModifiedAt: '',
    notebookInfoPage: '',
  },
  {
    id: 'cfbbf514-b7d5-11ea-b3de-0242ac130004',
    label: 'Personal',

    icon: 'bx bx-alarm',
    isDeleted: 'Y',
  },
  {
    id: 'd2bfd9f6-b7d5-11ea-b3de-0242ac130004',
    label: 'Javascript',

    icon: 'bx bx-calendar',
    notes: [
      {
        id: 'd2bfd9f6-b7d5-11ea-b3de-0242ac130004-1',
        label: 'Hello World',
        pin: 'Y',
      },
      {
        id: 'd2bfd9f6-b7d5-11ea-b3de-0242ac130004-2',
        label: 'Objects and Array in Javascript',
        isDeleted: 'N',
      },
    ],
    author: { id: 'jalpenshah', name: 'Jalpen Shah' },
    createdAt: '',
    lastModifiedAt: '',
    notebookInfoPage: '',
  },
  {
    id: 'd56c1e3a-b7d5-11ea-b3de-0242ac130004',
    label: 'Algorithms',

    icon: 'bx bx-purchase-tag',
  },
  {
    id: 'd8fa54ae-b7d5-11ea-b3de-0242ac130004',
    label: 'Data structures',

    icon: 'bx bx-list-ul',
    pin: 'Y',
  },
  {
    id: 'ddc866d8-b7d5-11ea-b3de-0242ac130004',
    label: 'React',

    icon: 'bx bx-archive',
  },
  {
    id: 'de6866d8-b7d5-11ea-b3de-0242ac130004',
    label: 'Azure',

    icon: 'bx bx-archive',
  },
];

const notesRepo = [
  {
    id: 'd2bfd9f6-b7d5-11ea-b3de-0242ac130004-1',
    label: 'Hello World a',
    pin: 'N',
    author: { id: 'jalpenshah', name: 'Jalpen Shah' },
    createdAt: '',
    notebookLabel: 'Javascript',
    lastModifiedAt: '',
    content: {
      time: 1595695527072,
      blocks: [
        { type: 'header', data: { text: 'Objects in Javascript', level: 2 } },
        {
          type: 'paragraph',
          data: {
            text: 'Objects, in JavaScript, is it’s most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript’s primitive data-types(Number, String, Boolean, null, undefined and symbol) in the sense that while these primitive data-types all store a single value each (depending on their types)c',
          },
        },
        {
          type: 'list',
          data: {
            style: 'unordered',
            items: [
              'Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.',
              'An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.',
              'Loosely speaking,&nbsp;objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs.&nbsp;These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.',
            ],
          },
        },
        {
          type: 'list',
          data: {
            style: 'unordered',
            items: ['Loosely speaking, objects in JavaScript '],
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and value can be anything.<br>To understand this rather abstract definition, let us look at an example of a JavaScript Object :&nbsp;&nbsp;',
          },
        },
        {
          type: 'code',
          data: {
            code: 'let school = {\n    name : "Vivekananda School",\n    location : "Delhi",\n    established : "1971"\n}',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'In the above example&nbsp;“name”, “location”, “established”&nbsp;are all&nbsp;“keys”&nbsp;and&nbsp;“Vivekananda School”, “Delhi” and 1971&nbsp;are values of these keys respectively.',
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Each of these keys is referred to as&nbsp;properties&nbsp;of the object. An object in JavaScript may also have a function as a member, in which case it will be known as a&nbsp;method&nbsp;of that object.',
          },
        },
        { type: 'paragraph', data: { text: 'Let us see such an example :' } },
        {
          type: 'code',
          data: {
            code: "// javascript code demonstrating a simple object \nlet school = { \n    name: 'Vivekananda School', \n    location : 'Delhi', \n    established : '1971', \n    displayInfo : function(){ \n        console.log(`${school.name} was established  \n              in ${school.established} at ${school.location}`); \n    } \n} \nschool.displayInfo();    ",
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'In the above example, “displayinfo” is a method of the school object that is being used to work with the object’s data, stored in its properties.',
          },
        },
        {
          type: 'paragraph',
          data: { text: 'Properties of JavaScript Object' },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Inherited properties of an object are those properties which have been inherited from the object’s prototype, as opposed to being defined for the object itself, which is known as the object’s Own property. To verify if a property is an objects Own property, we can use the&nbsp;hasOwnProperty&nbsp;method.&nbsp;&nbsp;',
          },
        },
      ],
      version: '2.18.0',
    },
  },
  {
    id: 'd2bfd9f6-b7d5-11ea-b3de-0242ac130004-2',
    label: 'Objects and Array in Javascript',
    pin: 'Y',
    notebookLabel: 'Javascript',
    author: { id: 'jalpenshah', name: 'Jalpen Shah' },
    createdAt: '',
    lastModifiedAt: '',
    content: {},
  },
  {
    id: 'cfbbf514-b7d5-11ea-b3de-0242ac130004-1',
    label: 'Java OOPS concepts',
    pin: 'Y',
    notebookLabel: 'Sub Java',
    author: { id: 'jalpenshah', name: 'Jalpen Shah' },
    createdAt: '',
    lastModifiedAt: '',
    content: {},
  },
  {
    id: 'cacbbd00-b7d5-11ea-b3de-0242ac130004-1',
    label: 'Hello World',
    pin: 'Y',
    notebookLabel: 'Sub Java',
    author: { id: 'jalpenshah', name: 'Jalpen Shah' },
    createdAt: '',
    lastModifiedAt: '',
    content: {},
  },
];
