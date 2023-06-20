export const get = async <T>(url: string, params?: any): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}