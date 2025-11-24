export class Helper
{

   static makeSlugFromString = (text: string): string => {
        return text
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/đ/gi,"d")
        .replace((/[^a-z0-9-]/g),"-")
        .replace(/-+/g, "-");
    }
}
export default Helper