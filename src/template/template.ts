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
  tpl = tpl.replace(/{{(\w*)}}/g, (fullMatch, key) => {
    return data[key] ? data[key] : "";
  });

  return tpl;
}
