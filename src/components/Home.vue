<template>
    <div class="container">
        <div class="row mt-4">
           <div class="col-md-8 mx-auto">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Réf</th>
      <th scope="col">Titre</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(book,index) in books" :key="index">
      <th scope="row">{{ book.ref }}</th>
      <td>{{ book.title }}</td>
      <td>{{ book.description }}</td>
      <td class="d-flex justify-content-center align-items-center">
        <router-link
         :to="{name : 'UpdateBook', params : { id : book.ref } }"
         class="btn btn-warning mr-2 font-weight-bold"
         >
         <i class="fas fa-edit"></i>
        </router-link>
        <span class="btn btn-danger" @click="removeBook(book)">
            <i class="fas fa-trash"></i>
        </span>
      </td>
    </tr>
  </tbody>
</table>
           </div>
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
    export default {
        name : "Home",
        setup(){
            const store = useStore();
            const books = computed(() => store.state.books.books);

            function getBooks(){
              store.dispatch("books/getBooks");
            }
            function removeBook(book){
              store.commit("books/removeBook",book);
            }

            onMounted(() => {
               getBooks();
            });

            return{
                books,
                removeBook,
            }
        }
    }
</script>

