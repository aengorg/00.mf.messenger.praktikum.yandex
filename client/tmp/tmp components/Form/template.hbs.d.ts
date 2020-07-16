interface Template {
  (context: any, options?: any): string;
}

declare const template: Template;

export = template;
