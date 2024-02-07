export function UseLowerCase(str: string) {
    if (str && typeof str === 'string') { 
      return str.toLowerCase();
    } else {
      return str; 
    }
}