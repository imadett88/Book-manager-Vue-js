<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto my-4">
                <h3 class="border-bottom py-2">
                    Ajouter un livre
                </h3>
                <form @submit="submit">
                    <div class="form-group">
                        <input type="text" class="form-control"
                        v-model="state.book.ref"
                        :class="state.book.ref.length ? state.validClass : state.errorClass"
                        placeholder="Réf" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control"
                        v-model="state.book.title"
                        :class="state.book.title.length ? state.validClass : state.errorClass"
                        placeholder="Titre">
                    </div>
                    <div class="form-group">
                        <textarea cols="30" rows="5" class="form-control"
                        v-model="state.book.description"
                        :class="state.book.description.length ? state.validClass : state.errorClass"
                        placeholder="Déscription"></textarea>
                    </div>
                    <div class="form-group">
                        <button :disabled="!state.book.ref || !state.book.title || !state.book.description" type="submit" class="btn btn-primary">
                            Valider
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'; 

    export default{
        name: "AddBook",
        setup(){
            const router = useRouter();
            const store = useStore();
            const state = reactive({
                book: {
                    ref: "",
                    title: "",
                    description: "",
                      },
                errorClass: "form-control is-invalid",
                validClass: "form-control is-valid",
            });
            function submit($event){
                $event.preventDefault();
                store.commit("books/addBook",state.book);
                state.book = {
                    ref: "",
                    title: "",
                    description: "",
                };
                router.push("/");
            }

            return{
                state,
                submit,
            }
        }
    }
</script>