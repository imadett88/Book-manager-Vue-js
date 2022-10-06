import { createStore } from "vuex";

const books = {
  namespaced: true,
  state() {
    return {
      books: [],
      book: null,
    };
  },
  mutations: {
    fetchBooks(state) {
      let books = JSON.parse(localStorage.getItem("books")) || [];
      state.books = books;
    },
    removeBook(state, book) {
      const currentBooks = state.books;
      const updateBooks = currentBooks.filter((item) => item.ref !== book.ref);
      localStorage.setItem("books", JSON.stringify(updateBooks));
      state.books = updateBooks;
    },
    addBook(state, book) {
      let books = state.books;
      books.push(book);
      localStorage.setItem("books", JSON.stringify(books));
    },
    updateBook(state, book) {
      let books = state.books;
      let updatedBooks = books.filter((item) => item.ref !== state.book.ref);
      updatedBooks.push(book);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    },
    fetchBook(state, ref) {
      const books = state.books;
      const book = books.find((item) => item.ref === ref);
      state.book = book;
    },
  },
  actions: {
    getBooks({ commit }) {
      commit("fetchBooks");
    },
    getBook({ commit }, ref) {
      commit("fetchBooks");
      commit("fetchBook", ref);
    },
  },
};

const store = createStore({
  modules: { books },
});

export default store;
