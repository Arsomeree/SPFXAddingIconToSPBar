declare interface IMyToolsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyToolsWebPartStrings' {
  const strings: IMyToolsWebPartStrings;
  export = strings;
}
