import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [],
  categories: [],
  trashData: () => set(() => ({ tasks: [], categories: [] })),
  addTask: (title, state, category) =>
    set((store) => ({ tasks: [...store.tasks, { title, state, category }] })),
  addCategoryTask: (title) =>
    set((store) => ({
      categories: [...store.categories, { title: title }],
    })),
  deleteTask: (array) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => !array.includes(task.title)),
    })),
  deleteCategory: (array) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        array.includes(task.category) ? { ...task, category: null } : task
      ),
      categories: store.categories.filter(
        (task) => !array.includes(task.title)
      ),
    })),
  pluginCategory: (array, category) =>
    set((store) => ({
      tasks: store.tasks.map((task) => {
        return array.includes(task.title)
          ? { ...task, category: category }
          : task;
      }),
    })),
  editTask: (title, newTitle) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { ...task, title: newTitle } : task
      ),
    })),
  editCategory: (title, newTitle) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.category === title ? { ...task, category: newTitle } : task
      ),
      categories: store.categories.map((task) =>
        task.title === title ? { ...task, title: newTitle } : task
      ),
    })),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { ...task, state } : task
      ),
    })),
});

export const useStore = create(persist(store, { name: "" }));
