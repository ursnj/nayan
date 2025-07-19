import { useEffect, useMemo, useRef, useState } from 'react';
import { isWindowDefined } from '@/components/Utils';

type Serializer<T> = (object: T | undefined) => string;
type Parser<T> = (val: string) => T | undefined;
type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;

type Options<T> = Partial<{
  serializer: Serializer<T>;
  parser: Parser<T>;
  logger: (error: any) => void;
  syncData: boolean;
}>;

export function useLocalStorage<T>(key: string, defaultValue: T, options?: Options<T>): [T, Setter<T>];
export function useLocalStorage<T>(key: string, defaultValue?: T, options?: Options<T>) {
  const opts = useMemo(() => {
    return {
      serializer: JSON.stringify,
      parser: JSON.parse,
      logger: console.log,
      syncData: true,
      ...options
    };
  }, [options]);

  const { serializer, parser, logger, syncData } = opts;

  const rawValueRef = useRef<string | null>(null);

  const [value, setValue] = useState(() => {
    if (!isWindowDefined()) return defaultValue;

    try {
      rawValueRef.current = window.localStorage.getItem(key);
      const res: T = rawValueRef.current ? parser(rawValueRef.current) : defaultValue;
      return res;
    } catch (e) {
      logger(e);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (!isWindowDefined()) return;

    const updateLocalStorage = () => {
      // Browser ONLY dispatch storage events to other tabs, NOT current tab.
      // We need to manually dispatch storage event for current tab
      if (value !== undefined) {
        const newValue = serializer(value);
        const oldValue = rawValueRef.current;
        rawValueRef.current = newValue;
        window.localStorage.setItem(key, newValue);
        window.dispatchEvent(
          new StorageEvent('storage', {
            storageArea: window.localStorage,
            url: window.location.href,
            key,
            newValue,
            oldValue
          })
        );
      } else {
        window.localStorage.removeItem(key);
        window.dispatchEvent(
          new StorageEvent('storage', {
            storageArea: window.localStorage,
            url: window.location.href,
            key
          })
        );
      }
    };

    try {
      updateLocalStorage();
    } catch (e) {
      logger(e);
    }
  }, [value]);

  useEffect(() => {
    if (!syncData) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== key || e.storageArea !== window.localStorage) return;

      try {
        if (e.newValue !== rawValueRef.current) {
          rawValueRef.current = e.newValue;
          setValue(e.newValue ? parser(e.newValue) : undefined);
        }
      } catch (e) {
        logger(e);
      }
    };

    if (!isWindowDefined()) return;

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, syncData]);

  return [value, setValue];
}
