export function template(tpl: string, data: any): string {
  // eslint-disable-next-line no-param-reassign
  tpl = tpl.replace(
    /{{for (\w+)}}([\s\S]+?){{endfor}}/g,
    (fullMatch: string, listName: string, temp: string) => {
      const result = data[listName].map((item: any) => {
        return template(temp, item);
      });
      return result.join("");
    }
  );
  // eslint-disable-next-line no-param-reassign
  tpl = tpl.replace(
    /{{for (\w+) as (\w+)}}([\s\S]+?){{endfor}}/g,
    (fullMatch: string, listName: string, iterator: string, option: string) => {
      const result = data[listName].map((item: any) => {
        const temp = {};
        // @ts-ignore
        temp[iterator] = item;
        return template(option, temp);
      });
      return result.join("");
    }
  );
  // eslint-disable-next-line no-param-reassign
  tpl = tpl.replace(/{{(\w*)}}/g, (fullMatch, key) => {
    return data[key] ? data[key] : "";
  });

  return tpl;
}
