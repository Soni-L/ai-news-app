export default function useLocalStorageTags(key: string) {
  let canUseDOM = !!(
    (typeof window !== 'undefined' &&
      window.document && window.document.createElement)
  );

  const getTagsFromLocalStorage = () => {
    return canUseDOM ? localStorage?.getItem(key)?.split(';') : [];
  };

  const setLocalStorageItems = (value: string) => {
    let currentState = localStorage.getItem(key)?.split(";");
    if (currentState?.includes(value)) return;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, `${value}`);
      return;
    }
    localStorage.setItem(key, `${localStorage.getItem(key)};${value}`);
  };

  const clearTags = () => {
    localStorage.removeItem(key)
  }

  return [getTagsFromLocalStorage(), setLocalStorageItems, clearTags] as const;
}
