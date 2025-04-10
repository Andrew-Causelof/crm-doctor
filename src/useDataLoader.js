//@TODO нужн обудет реализовать загрузку данных при инициализации
import { useEffect } from "react";
import { useUserStore } from "./store";

function useDataLoader() {
  const fetchUserData = useUserStore((state) => state.fetchUserData);

  useEffect(() => {
    const userId = 3; //@TODO ID пользователя (нужно динамически определять)
    fetchUserData(userId);
  }, [fetchUserData]); // Запуск загрузки при монтировании
}

export { useDataLoader };
